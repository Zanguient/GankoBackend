import { initialAdmin } from "../../config/ini";
import { DBHandler, Document } from "./db-handler";
import { QueryBuilder, Q } from "./query-builder";
import { promisifyAll } from "bluebird";
import { config } from "../../config/global";
import { TYPE_USER } from "../../services/models/users";

const couch = require("couchbase");
const N1qlQuery = couch.N1qlQuery;
const uuid = require("uuid/v4");

export class DBBack implements DBHandler {

    private bucket: any;
    private bucketName = config.database.bucket;

    constructor() {
        const database = config.database;
        const cluster: any = new couch.Cluster(`couchbase://${database.host}`);
        cluster.authenticate({ username: database.username, password: database.password });
        this.bucket = promisifyAll(cluster.openBucket(this.bucketName));

        this.setupBucket()
            .then(x => this.initalConfig())
            // .then(x => { if (callback != undefined) callback(); })
            .catch(err => console.log(err));
    }

    private setupBucket(): Promise<any> {
        const findPK = "SELECT * FROM system:indexes WHERE name = $1";
        const createPK = "CREATE PRIMARY INDEX `" + this.bucketName + "-pi` ON `" + this.bucketName + "`";
        const createTypeIndex = "CREATE INDEX ix_type ON `" + this.bucketName + "`(type)";
        return this.bucket.queryAsync(N1qlQuery.fromString(findPK), [this.bucketName + "-pi"])
            .then((x: any) => x.length > 0 ? 0 :
                this.bucket.queryAsync(N1qlQuery.fromString(createPK))
                    .then((y: any) => this.bucket.queryAsync(N1qlQuery.fromString(createTypeIndex))));
    }

    private initalConfig(): Promise<string> {
        return this.typedOne(TYPE_USER)
            .then(x => x == undefined ? this.insert(initialAdmin) : "");

    }

    insertId(id: string, body: any): Promise<string> {
        return this.bucket.insertAsync(id, body)
            .then(() => id);
    }

    insert(body: any): Promise<any> {
        const id = uuid();
        return this.bucket.insertAsync(id, body)
            .then((x: any) => id);
    }

    list<T>(query: QueryBuilder): Promise<Document<T>[]> {
        return this.getByQuery(query);
    }

    listByType<T>(type: string, query?: QueryBuilder): Promise<Document<T>[]> {
        let q = Q().equalStr("type", type);
        if (query) q = q.andExp(query);
        return this.getByQuery(q);
    }

    typedOne<T>(type: string, query?: QueryBuilder): Promise<Document<T>> {
        let q = Q().equalStr("type", type);
        if (query) q = q.andExp(query);
        return this.getOneByQuery<T>(query);
    }

    byId<T>(id: string): Promise<Document<T>> {
        return this.bucket.getAsync(id)
            .then((x: any) => { return { id: id, doc: x.value }; })
            .catch((err: any): any => {
                if (err.code != 13) throw err;
                return undefined;
            });
    }

    remove(id: string): Promise<string> {
        return this.bucket.removeAsync(id)
            .then((x: any) => id);
    }
    replace(id: string, body: any): Promise<string> {
        return this.bucket.replaceAsync(id, body)
            .then((x: any) => id);
    }
    deleteByQuery(query: QueryBuilder): Promise<string> {
        let q = "DELETE FROM `" + this.bucketName + "`";
        return query.build()
            .then(x => q += " WHERE " + x.query + " LIMIT 1")
            .then(() => N1qlQuery.fromString(q))
            .then(x => this.bucket.queryAsync(x, []))
            .then(() => "");
    }

    private getOneByQuery<T>(query?: QueryBuilder): Promise<Document<T>> {
        let q = "SELECT META(`" + this.bucketName + "`).id, * FROM `" + this.bucketName + "`";

        return (query ? query.build() : Promise.resolve({ query: null, params: [] }))
            .then(x => x.query ? q += ` WHERE ${x.query}` : q)
            .then(() => q += ` LIMIT 1`)
            .then(() => N1qlQuery.fromString(q))
            .then(x => this.bucket.queryAsync(x, []))
            .then((x: any[]) => {
                return x.map(y => { return { id: y.id, doc: y[this.bucketName], rev: y.rev }; });
            })
            .then((x: any[]) => x.length > 0 ? x[0] : undefined);
    }

    private getByQuery(query?: QueryBuilder): Promise<any> {

        let q = "SELECT META(`" + this.bucketName + "`).id, * FROM `" + this.bucketName + "`";
        return (query ? query.build() : Promise.resolve({ query: null, params: [] }))
            .then(x => x.query ? q += ` WHERE ${x.query}` : q)
            .then(() => {
                if (query) {
                    if (query.orderBy) q += ` ORDER BY ${query.orderBy} ${query.orderMode}`;
                    if (query.limit > 0) q += ` LIMIT ${query.limit}`;
                    if (query.skip > 0) q += ` OFFSET ${query.skip}`;
                }
                return q;
            })
            .then(() => N1qlQuery.fromString(q))
            .then(x => this.bucket.queryAsync(x, []))
            .then((x: any[]) => { return x.map(y => { return { id: y.id, doc: y[this.bucketName] }; }); });

    }


}