import { verify } from 'jsonwebtoken'
import { config } from '../config/global'
import { ResponseBody } from '../controllers/response-body'
export function ValidateToken(req, res, next) {
    let token = req.get('Authorization');
    verify(token, config.secret, (err, decoded) => {
        if (err) {
            res.status(401).send(new ResponseBody(false,"No Autorizado"));
        }else{
            req.id = decoded.id;
            next();
        }
    });
}