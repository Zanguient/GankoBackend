import { UserService } from '../../services/user-service';
import { Usuario } from "../../services/models/users";
import { Response, Request } from 'express';
import { sign } from 'jsonwebtoken';
import { config, secret } from '../../config/global';
import { ResponseBody } from '../response-body';
var md5 = require('md5');

interface RequestBody {
    username: string;
    pass: string;
}

class ResponseLogin extends ResponseBody {
    constructor(success: boolean, public data: any, err: string) {
        super(success, err);
    }
}

export function login(req: Request, res: Response, next) {
    let login = req.body as RequestBody;
    UserService.instance.login(login.username, md5(login.pass))
        .then(data => {
            if (data) {
                let token = sign({ id: data.id }, secret);
                res.send(new ResponseLogin(true, { user: data.id, token: token }, null));
            } else {
                res.send(new ResponseLogin(false, "Usuario o contraseña incorrectos", null));
            }
        }, err => {
            res.status(500).send(new ResponseLogin(false, null, err));
        });
}