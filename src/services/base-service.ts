import { DBHandler, DBConnection } from "./database/db-handler";
import { Q, QueryBuilder } from "./database/query-builder";

export class BaseService {

    private static _instance: BaseService;
    static get instace(): BaseService {
        if (BaseService._instance == undefined) {
            BaseService._instance = new BaseService(DBConnection.instance);
        }
        return BaseService._instance;
    }

    constructor(private db: DBHandler) { }

    bytypeDoc(type: string, doc: string) {
        return this.db.typedOne(type, Q().equalStr("usuario.documento", doc));
    }

    list(type: string, query?:QueryBuilder) {
        return this.db.listByType<any>(type, query);
    }

    byId(id: string) {
        return this.db.byId<any>(id);
    }

    remove(id: string) {
        return this.db.remove(id);
    }

    update(id: string, doc: any) {

    }

    replace(id: string, body: any): Promise<string> {
        return this.db.replace(id, body)
            .then((x: any) => id);
    }

    add(doc: any) {
        return this.db.insert(doc);
    }

}
