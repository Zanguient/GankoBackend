import { service, Usuario } from '../../services/user-service'
import { Response, Request } from 'express';
import { sign } from 'jsonwebtoken'
import { config } from '../../config/global'
import { ResponseBody } from '../response-body'
var md5 = require('md5');

interface RequestBody {
    username: string;
    password: string;
}

interface LoginData{
    user: Usuario;
    token: string;
}

class ResponseLogin extends ResponseBody{
    constructor(success:boolean,public data:LoginData,err:string){
        super(success,err);
    }
}

export function login(req: Request, res: Response, next) {
    let auth = req.body as RequestBody;
    
    service.login(auth.username, md5(auth.password))
        .subscribe(data => {
            let token = data.length > 0 ? sign({id:data[0].id}, config.secret) : null
            res.send(new ResponseLogin(data.length > 0 ? true : false, { user: data[0], token: token }, null));
        }, err => {
            res.status(500).send(new ResponseLogin(false, null, err));
        });
}