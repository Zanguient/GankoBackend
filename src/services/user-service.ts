import 'rxjs/add/operator/mergeMap';
import { DBConnection } from './db-connection';
import { TYPE_USER, Usuario } from "./models/users";
import { nowDifference } from '../util/date-util';
let md5 = require('md5');
const uuid = require("uuid/v4");

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
        usuario.pass = md5(usuario.pass);
        if (usuario.rol == 'ganadero') {
            usuario.registro = new Date();
            usuario.inicioPlan = new Date();
            usuario.ultimoPago = new Date();
            const id = uuid();
            usuario.channels = ['account_' + id];
            this.db.insertId(id, usuario);
        } else {
            return this.db.insert(usuario);
        }
    }

    update(idUsuario: string, usuario: Usuario) {
        return this.db.getById<Usuario>(idUsuario)
            .then(x => {
                const { id, doc } = x;
                doc.nombre = usuario.nombre;
                doc.apellido = usuario.apellido;
                doc.celular = usuario.celular;
                doc.email = usuario.email;
                doc.dni = usuario.dni;

                if (usuario.plan) {
                    doc.plan = usuario.plan;
                    doc.inicioPlan = new Date();
                    doc.ultimoPago = new Date();
                }

                if (usuario.pass) {
                    doc.pass = md5(usuario.pass);
                }

                return this.db.replace(id, doc);
            });
    }

    updatePay(id: string) {
        return this.db.getById<Usuario>(id)
            .then(x => {
                const { id, doc } = x;
                doc.ultimoPago = new Date();
                return this.db.replace(id, doc);
            });
    }

    list(limit: number = undefined, skip: number = undefined) {
        return this.db.ListByType(TYPE_USER, "rol = $1 OR rol = $2", ['admin', 'assistant'], limit, skip);
    }

    listRanchers(q: string = undefined, limit: number = undefined, skip: number = undefined) {
        let query = '';
        if (q && q != '') {
            query = ' AND dni LIKE "' + q + '%"';
        }
        return this.db.ListByType(TYPE_USER, "rol = $1 OR rol = $2" + query, ['ganadero', 'usuario'], limit, skip);
    }

    listRanchersByPayment(q: string = undefined, limit: number = undefined, skip: number = undefined) {
        let query = '';
        if (q && q != '') {
            query = ' AND dni LIKE "' + q + '%"';
        }
        return this.db.ListByType(TYPE_USER, "(rol = $1 OR rol = $2) AND plan != $3 AND ultimoPago IS NOT MISSING AND ultimoPago >= $4" + query, ['ganadero', 'usuario', 'gratuito', nowDifference()], limit, skip, ['ultimoPago', 'DESC']);
    }

    remove(id: string) {
        return this.db.remove(id);
    }

    getOneByEmail(email: string) {
        return this.db.typedOne<Usuario>(TYPE_USER, "email = $1", [email]);
    }

    getById(id: string) {
        return this.db.getById<Usuario>(id);
    }

}