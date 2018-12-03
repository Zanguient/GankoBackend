import { QueryBuilder } from "./query-builder";
import { DBBack } from "./db-back";
import { DBDesk } from "./db-desk";



export interface Document<T> {
    id: string;
    doc: T;
}

export abstract class DBHandler {

    abstract insertId(id: string, body: any): Promise<string>;
    abstract insert(body: any): Promise<any>;
    abstract list<T>(query?: QueryBuilder): Promise<Document<T>[]>;
    abstract listByType<T>(type: string, query?: QueryBuilder): Promise<Document<T>>;
    abstract typedOne<T>(type: string, query?: QueryBuilder): Promise<Document<T>>;
    abstract byId<T>(id: string): Promise<Document<T>>;
    abstract remove(id: string): Promise<string>;
    abstract replace(id: string, body: any): Promise<string>;
    abstract deleteByQuery<T>(query: QueryBuilder): Promise<Document<T>>;
}

export class DBConnection {

    private static _instance: DBHandler;
    static get instance(): DBHandler {
        if (DBConnection._instance == undefined) {
            const env = process.env.NODE_ENV || "development";
            if(env == "desktop"){
                DBConnection._instance = new DBDesk();
            }else{
                DBConnection._instance = new DBBack();
            }
            
        }
        return DBConnection._instance;
    }

}