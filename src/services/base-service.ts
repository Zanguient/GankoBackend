import { DBConnection } from "./db-connection";

export class BaseService {

    private static _instance: BaseService;
    static get instace(): BaseService {
        if (BaseService._instance == undefined) {
            BaseService._instance = new BaseService(DBConnection.instance);
        }
        return BaseService._instance;
    }

    constructor(private db: DBConnection) { }

    bytypeDoc(type: string, doc: string) {
        return this.db.typedOne(type, "usuario.documento = $1", [doc]);
    }

    list(type: string, where: string = undefined, params: any[] = []) {
        return this.db.ListByType<any>(type, where, params);
    }

    byId(id: string) {
        return this.db.getById<any>(id);
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
