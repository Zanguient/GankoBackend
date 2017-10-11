import { DatabaseService } from './database-service'
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';


const table = "usuario"

export class UserService extends DatabaseService {

    login(user: string, pass: string) {
        return this.query<Usuario>(`SELECT * FROM ${table} WHERE nombre = ? AND apelido = ?`, [user, pass]);
    }
}

export class Usuario {

    constructor(public name: string,
        public lastname: string) { }

}

export const service: UserService = new UserService();