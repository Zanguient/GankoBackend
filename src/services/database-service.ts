import { createConnection, IConnection } from "mysql";
import { config } from "../config/global";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import mysql = require('promise-mysql');

export class DatabaseService {


    private connection: IConnection;

    open(): Observable<any> { //Abre la conexion y la cierra automaticamente
        return Observable
            .fromPromise(mysql.createConnection(config[""+process.env.NODE_ENV].database))
            .flatMap(con => Observable.of(con)
                .do(null, null, () => (con as any).end())
            );
    }

    query<T>(sql: String, params: any[] = [],): Observable<T> {//ejecuta open y realiza la sentencia sql
        return this.open()
            .flatMap(con => con.query(sql, params))
    }


}