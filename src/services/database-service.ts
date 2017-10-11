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

    /*openConection(): Observable<IConnection> {
        return Observable.of(this.connection)
            .flatMap(con => {
                con.connect()
                return Observable.of(con)
                    .do(null, null, () => con.end());
            });
    }
*/
    open(): Observable<any> {
        return Observable
            .fromPromise(mysql.createConnection(config.database))
            .flatMap(con => Observable.of(con)
                .do(null, null, () => (con as any).end())
            );
    }

    query<T>(sql: String, params:any[] = []): Observable<T> {
        console.log(sql)
        return this.open()
            .flatMap(con => con.query(sql, params))
    }


}