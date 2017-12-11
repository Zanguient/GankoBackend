import { service } from '../../services/user-service'
import { Usuario } from "../../services/models/usuario"
import { Response, Request } from 'express';
import { config } from '../../config/global'
import { ResponseBody } from '../response-body'
var md5 = require('md5');

class ResponseLogin extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function createUser(req, res, next) {
    let user: Usuario = req.body;
    user.estado = "activo";
    user.password = md5(user.password);
    service.addUser(user)
        .subscribe(data => {
            res.send(new ResponseLogin(true, data, null));
        }, err => {
            res.status(500).send(new ResponseLogin(false, null, err));
        });
}