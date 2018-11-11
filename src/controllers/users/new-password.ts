import { UserService } from "./../../services/user-service";
import { ResponseBody } from "./../response-body";
let md5 = require('md5');

export function newPassword(req, res, next) {
    let oldPass = req.body.oldPass;
    let newPass = req.body.newPass;
    let id = req.params.id
    UserService.instance.getById(id)
        .then(data => {
            if (data) {
                if (data.doc.pass == md5(oldPass)) {
                    data.doc.pass = newPass;
                    UserService.instance.update(id, data.doc)
                        .then(result => {
                            res.send(new ResponseBody(true, null));
                        })
                        .catch(err => {
                            res.send(new ResponseBody(false, err));
                        }

                        )
                }else{
                    res.send(new ResponseBody(false, "El password antiguo no coincide"));
                }
            }

        }, err => {
            res.status(500).send(new ResponseBody(false, "Error Actualizando Entrada"));
        })

}