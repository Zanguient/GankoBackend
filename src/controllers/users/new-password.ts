import { Router } from "express"
import { service } from "./../../services/user-service"
import { ResponseBody } from "./../response-body"

export function newPassword(req, res, next) {
    let oldPass = req.body.oldPass;
    let newPass = req.body.newPass;
    let id = req.id;
    service.changeOldPassword(oldPass, newPass, id)
        .subscribe(data => {
            res.send(new ResponseBody(true,null));
        }, err => {
            res.status(500).send(new ResponseBody(false,"Error Actualizando Entrada"));
        })

}