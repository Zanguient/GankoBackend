import { UserService } from '../../services/user-service'
import { Usuario } from "../../services/models/users"
import { Response, Request } from 'express';
import { config } from '../../config/global'
import { ResponseBody } from '../response-body'
var md5 = require('md5');

class ResponseLogin extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insert(req, res, next) {
    let user: Usuario = req.body;
    user.estado = "activo";
    UserService.instance.getOneByEmail(user.email)
        .then(data => {
            if (!data) {
                UserService.instance.insert(user)
                    .then(result => {
                        res.send(new ResponseLogin(true, result, null));
                    }, err => {
                        res.status(500).send(new ResponseLogin(false, null, err));
                    })
            }
            else {
                res.send(new ResponseLogin(false, null, "El email ingresado ya existe."));
            }
        }, err => {
            res.status(500).send(new ResponseLogin(false, null, err));
        });
}