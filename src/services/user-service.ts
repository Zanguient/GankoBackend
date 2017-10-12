import { DatabaseService } from './database-service'
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';


const table = "usuario"

export class UserService extends DatabaseService {

    //permite verificar si el usuario y contraseña son correctos para el login
    login(user: string, pass: string) {
        return this.query<Usuario>(`SELECT * FROM ${table} WHERE nombre = ? AND apellido = ?`, [user, pass]);
    }
    //permite verificar si el correo existe y el envio del correo para restaurar la contraseña
    resetPassword(email: string) {
        return this.query<Email>(`SELECT email,estado FROM ${table} WHERE email = ? `, [email]);
    }
    //cambia la contraseña antigua por la nueva
    changePassword(pass: string, email: string) {
        return this.query(`UPDATE ${table} SET password = ? WHERE email = ? `, [pass,email]);
    }
}

export class Usuario {
    constructor(public name: string,
        public lastname: string) { }
}
export class Email {
    constructor(public email: string,
        public estado: string) { }
}

export const service: UserService = new UserService();