import { Response } from "express";
import { Usuario } from "../../services/models/users";
import { UserService } from "../../services/user-service";
import { ResponseUser } from "./list";

export function updatePay(req, res: Response, next) {
    const id = req.params.id;
    UserService.instance.updatePay(id)
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(false, null, err));
        });
}
