import { Response } from "express";
import { Usuario } from "../../services/models/users";
import { UserService } from "../../services/user-service";
import { ResponseUser } from "./list";

export function updateUser(req, res: Response, next) {
    const usr: Usuario = req.body;
    const id = req.params.id;
    UserService.instance.update(id, usr)
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(false, null, err));
        });
}
