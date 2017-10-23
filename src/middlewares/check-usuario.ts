import { service, Email } from '../services/user-service'
import { ResponseBody } from '../controllers/response-body'

export function CheckUsuarioByEmail(req, res, next) {
    let email: string = req.body.email;
    service.checkUserByEmail(email).subscribe(data => {
        if (data.length > 0 ){
            res.send(new ResponseBody(false,"Error, el Email ya esta registrado"));
        }else{
            next();
        }
    });
}

export function CheckUsuarioByUser(req, res, next) {
    let usuario: string = req.body.usuario;
    service.checkUserByUser(usuario).subscribe(data => {
        if (data.length > 0 ){
            res.send(new ResponseBody(false,"Error, el usuario ya existe"));
        }else{
            next();
        }
    });
}