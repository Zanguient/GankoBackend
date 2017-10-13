import { service, Email } from '../services/user-service'
import { ResponseBody } from '../controllers/response-body'

export function CheckUsuario(req, res, next) {
    let email: string = req.body.email;
    service.checkUser(email).subscribe(data => {
        if (data.length > 0 ){
            res.send(new ResponseBody(false,"Error, el usuario ya existe"));
        }else{
            next();
        }
    });
}