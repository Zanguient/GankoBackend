import { verify } from 'jsonwebtoken'
import { config, secret } from '../config/global'
import { ResponseBody } from '../controllers/response-body'

export function ValidateToken(req, res, next) {
    let token = req.get('Authorization');
    console.log("Token : " + token);
    // verify(token, config[""+process.env.NODE_ENV].secret, (err, decoded) => {
    verify(token, secret, (err, decoded) => {

        if (err) {
            res.status(401).send(new ResponseBody(false, "No Autorizado"));
        } else {
            console.log("Decoded id: " + decoded.id);
            req.id = decoded.id;
            next();
        }
    });
}