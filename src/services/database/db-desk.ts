import { DBHandler } from "./db-handler";
import { DESK_PORT } from "../../config/global";
import * as request from "request-promise";


export class DBDesk implements DBHandler {
    
    url = "http://localhost:" + DESK_PORT;

    constructor() { }

    insertId(id: string, body: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    insert(body: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    list<T>(query?: import("c:/Proyectos/Ganko/ganko-backend/src/services/database/query-builder").QueryBuilder): Promise<import("c:/Proyectos/Ganko/ganko-backend/src/services/database/db-handler").Document<T>[]> {
        throw new Error("Method not implemented.");
    }
    listByType<T>(type: string, query?: import("c:/Proyectos/Ganko/ganko-backend/src/services/database/query-builder").QueryBuilder): Promise<import("c:/Proyectos/Ganko/ganko-backend/src/services/database/db-handler").Document<T>> {
        throw new Error("Method not implemented.");
    }
    typedOne<T>(type: string, query?: import("c:/Proyectos/Ganko/ganko-backend/src/services/database/query-builder").QueryBuilder): Promise<import("c:/Proyectos/Ganko/ganko-backend/src/services/database/db-handler").Document<T>> {
        throw new Error("Method not implemented.");
    }
    byId<T>(id: string): Promise<import("c:/Proyectos/Ganko/ganko-backend/src/services/database/db-handler").Document<T>> {
        throw new Error("Method not implemented.");
    }
    remove(id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    replace(id: string, body: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    deleteByQuery<T>(query: import("c:/Proyectos/Ganko/ganko-backend/src/services/database/query-builder").QueryBuilder): Promise<import("c:/Proyectos/Ganko/ganko-backend/src/services/database/db-handler").Document<T>> {
        throw new Error("Method not implemented.");
    }

    
}