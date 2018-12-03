import 'rxjs/add/operator/mergeMap';
import { TYPE_USER, Usuario } from "./models/users";
import { nowDifference } from '../util/date-util';
import { DBConnection, DBHandler } from './database/db-handler';
import { Q } from './database/query-builder';
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

    constructor(private db: DBHandler) { }

    //permite recuperar los bovinos pertenecientes a un usuario o finca
    login(email: string, pass: string) {
        return this.db.typedOne(TYPE_USER, Q().equalStr("email", email).and().equalStr("pass", pass));
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
        return this.db.byId<Usuario>(idUsuario)
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
        return this.db.byId<Usuario>(id)
            .then(x => {
                const { id, doc } = x;
                doc.ultimoPago = new Date();
                return this.db.replace(id, doc);
            });
    }

    list(limit: number = undefined, skip: number = undefined) {
        return this.db.listByType(TYPE_USER, Q().equalStr("rol", "admin").or().equalStr("rol", "assistant").page(limit, skip));
    }

    listRanchers(q: string = undefined, limit: number = undefined, skip: number = undefined) {
        let query = Q().equalStr("rol", "ganadero").or().equalStr("rol", "usuario");

        if (q && q != '') {
            query = Q().likeEnd("dni", q).andExp(query);
        }
        return this.db.listByType(TYPE_USER, query.page(limit, skip));
    }

    listRanchersByPayment(q: string = undefined, limit: number = undefined, skip: number = undefined) {
        let query = Q().equalStr("plan", "gratuito").andExp(Q().equalStr("rol", "ganadero").or().equalStr("rol", "usuario"))
            .and().isNotMissing("ultimoPago").and().gteStr("ultimoPago", nowDifference());
        if (q && q != '') {
            query = query.and().likeEnd("dni", q);
        }
        return this.db.listByType(TYPE_USER, query.orderDesc("ultimoPago").page(limit, skip));
    }

    remove(id: string) {
        return this.db.remove(id);
    }

    getOneByEmail(email: string) {
        return this.db.typedOne<Usuario>(TYPE_USER, Q().equalStr("email", email));
    }

    getById(id: string) {
        return this.db.byId<Usuario>(id);
    }

}