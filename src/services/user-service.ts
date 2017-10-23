import { DatabaseService } from './database-service';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

var md5 = require("md5");
const table = "usuario";

export class UserService extends DatabaseService {

    //permite insertar un nuevo usuario
    addUser(nombre: string, apellido: string,email: string,usuario: string,password:string,identificacion:number) {
        return this.query('INSERT INTO '+ table +' (`nombre`,`apellido`,`email`,`usuario`,`password`,`identificacion`,`estado`)VALUES(?,?,?,?,?,?,"activo");', [nombre,apellido,email,usuario,md5(password),identificacion]);
    }
    //permite verificar si el nuevo usuario ya existe con el correo suministrado
    checkUserByEmail(email: string) {
        return this.query<Email[]>(`SELECT email from ${table} where email = ?`,[email]);
    }
    //permite verificar si el nuevo usuario ya existe con el usuario suministrado
    checkUserByUser(usuario: string) {
        return this.query<Email[]>(`SELECT usuario from ${table} where usuario = ?`,[usuario]);
    }
    //permite verificar si el usuario y contraseña son correctos para el login
    login(user: string, pass: string) {
        return this.query<Usuario[]>(`SELECT id,usuario,estado FROM ${table} WHERE usuario = ? AND password = ?`, [user, pass]);
    }
    //permite verificar si el correo existe y el envio del correo para restaurar la contraseña
    resetPassword(email: string) {
        return this.query<Email[]>(`SELECT email,estado FROM ${table} WHERE email = ? `, [email]);
    }
    //cambia la contraseña antigua por la nueva despues de resetear
    changePassword(pass: string, email: string) {
        return this.query(`UPDATE ${table} SET password = ? WHERE email = ? `, [md5(pass),email]);
    }

    //
    changeOldPassword(oldPass: string, newPass: string, id:Number) {
        return this.query(`UPDATE ${table} SET password = ? WHERE id = ? AND password = ?`, [md5(newPass),id,md5(oldPass)]);
    }
}

export class Usuario {
    constructor(public id:number,
        public name: string,
        public lastname: string) { }
}
export class Email {
    constructor(public email: string,
        public estado: string) { }
}

export const service: UserService = new UserService();