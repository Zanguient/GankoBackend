import { DBHandler, Document } from "./db-handler";
import { DESK_PORT } from "../../config/global";
import * as request from "request-promise-native";
import { QueryBuilder, Q } from "./query-builder";


export class DBDesk implements DBHandler {

    url = "http://localhost:" + DESK_PORT;

    constructor() { }

    insertId(id: string, body: any): Promise<string> {
        return request(this.url + "/insert/" + id, { method: "POST", json: true, body, headers: { "Content-Type": "application/json" } })
            .then(x => this.validate<string>(x, 'Error al insertar documento'));

    }
    insert(body: any): Promise<string> {
        return request(this.url + "/insert", { method: "POST", json: true, body, headers: { "Content-Type": "application/json" } })
            .then(x => this.validate<string>(x, 'Error al insertar documento'));
    }
    list<T>(query: QueryBuilder): Promise<Document<T>[]> {
        return request(this.url + "/find", { method: "POST", json: true, body: query.buildJson(), headers: { "Content-Type": "application/json" } })
            .then(x => this.validate<Document<T>[]>(x, "Error al ejecutar consulta"));
    }

    listByType<T>(type: string, query?: QueryBuilder): Promise<Document<T>[]> {
        let q = Q().equalStr("type", type);
        if (query) q = q.andExp(query);
        return request(this.url + "/find", { method: "POST", json: true, body: q.buildJson(), headers: { "Content-Type": "application/json" } })
            .then(x => this.validate<Document<T>[]>(x, "Error al ejecutar consulta"));
    }
    typedOne<T>(type: string, query?: QueryBuilder): Promise<Document<T>> {
        let q = Q().equalStr("type", type);
        if (query) q = q.andExp(query);
        return request(this.url + "/find-one", { method: "POST", json: true, body: q.buildJson(), headers: { "Content-Type": "application/json" } })
            .then(x => this.validate<Document<T>>(x, "Documento no encontrado"));
    }
    byId<T>(id: string): Promise<Document<T>> {
        return request(this.url + "/find-one/" + id, { method: "POST" })
            .then(x => this.validate<Document<T>>(x, "Documento no encontrado"));
    }
    remove(id: string): Promise<string> {
        return request(this.url + "/remove/" + id, { method: "POST" })
            .then(x => this.validate<string>(x, "Proceso no completado"));
    }
    replace(id: string, body: any): Promise<string> {
        return request(this.url + "/update/" + id, { method: "POST", json: true, body })
            .then(x => this.validate<string>(x, "Proceso no completado"));
    }
    deleteByQuery(query: QueryBuilder): Promise<string> {
        return request(this.url + "/remove", { method: "POST", json: true, body: query.buildJson() })
            .then(x => this.validate<string>(x, "Proceso no completado"));
    }

    private validate<T>(data: any, msg: string): T {
        if (data.success) {
            return data.data as T;
        } else {
            throw Error(msg);
        }
    }

}