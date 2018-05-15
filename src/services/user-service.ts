import { Usuario, TYPE_USER } from "./models/users"
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';

export class UserService {

    private static _instance: UserService;
    static get instance(): UserService {
        if (UserService._instance == undefined) {
            UserService._instance = new UserService(DBConnection.instance);
        }
        return UserService._instance;
    }

    constructor(private db: DBConnection) { }

    //permite recuperar los bovinos pertenecientes a un usuario o finca
    login(email: string, pass: string) {
        return this.db.typedOne(TYPE_USER, "email = $1 and pass = $2", [email, pass]);
    }

    insert(usuario: Usuario) {
        return this.db.insert(usuario);
    }

    update(idUsuario: string, usuario: Usuario) {
        return this.db.replace(idUsuario, usuario);
    }

    getOneByEmail(email: string) {
        return this.db.typedOne<Usuario>(TYPE_USER, "email = $1", [email]);
    }

    getById(id: string) {
        return this.db.getById<Usuario>(id);
    }

}