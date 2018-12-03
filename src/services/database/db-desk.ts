import { DBHandler, Document } from "./db-handler";
import { DESK_PORT } from "../../config/global";
import * as request from "request-promise";
import { QueryBuilder } from "./query-builder";


export class DBDesk implements DBHandler {
    
    url = "http://localhost:" + DESK_PORT;

    constructor() { }

    insertId(id: string, body: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    insert(body: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    list<T>(query?: QueryBuilder): Promise<Document<T>[]> {
        throw new Error("Method not implemented.");
    }
    listByType<T>(type: string, query?: QueryBuilder): Promise<Document<T>> {
        throw new Error("Method not implemented.");
    }
    typedOne<T>(type: string, query?: QueryBuilder): Promise<Document<T>> {
        throw new Error("Method not implemented.");
    }
    byId<T>(id: string): Promise<Document<T>> {
        throw new Error("Method not implemented.");
    }
    remove(id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    replace(id: string, body: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    deleteByQuery<T>(query: QueryBuilder): Promise<Document<T>> {
        throw new Error("Method not implemented.");
    }

    
}