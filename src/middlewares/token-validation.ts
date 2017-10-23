import { verify } from 'jsonwebtoken'
import { config } from '../config/global'
import { ResponseBody } from '../controllers/response-body'

export function ValidateToken(req, res, next) {
    let token = req.get('Authorization');
    console.log("Token : "+token);
    verify(token, config.secret, (err, decoded) => {
        if (err) {
            res.status(401).send(new ResponseBody(false,"No Autorizado"));
        }else{
            console.log("Decoded id: "+decoded.id);
            req.id = decoded.id;
            next();
        }
    });
}