import { service, Usuario } from '../../services/user-service'
import { Response, Request } from 'express';

interface RequestBody {
    username: string;
    password: string;
}

class ResponseBody {
    constructor(public success: boolean,
        public data: Usuario,
        public err: string) { }
}

export function login(req: Request, res: Response, next) {
    let auth = req.body as RequestBody;
    service.login(auth.username, auth.password)
        .subscribe(data => {
            res.send(new ResponseBody(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseBody(false, null, err));
        });
}