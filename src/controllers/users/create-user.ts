import { service, Usuario } from '../../services/user-service'
import { Response, Request } from 'express';
import { config } from '../../config/global'
import { ResponseBody } from '../response-body'
var md5 = require('md5');

interface RequestBody {
    nombre: string;
    apellido: string;
    email: string;
    usuario: string;
    password: string;
    identificacion: number;
    estado: string;

}

interface LoginData{
    user: Usuario;
    token: string;
}

class ResponseLogin extends ResponseBody{
    constructor(success:boolean,public data,err:string){
        super(success,err);
    }
}

export function createUser(req, res, next) {
    let user = req.body as RequestBody;
    service.addUser(user.nombre,user.apellido,user.email,user.usuario,user.password,user.identificacion)
        .subscribe(data => {
            res.send(new ResponseLogin(true,data, null));
        }, err => {
            res.status(500).send(new ResponseLogin(false, null, err));
        });
}