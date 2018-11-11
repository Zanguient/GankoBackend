import { ResponseBody } from "../response-body";
import { Response, Request } from "express";
import { UserService } from "../../services/user-service";
import { ResponseUser } from "./list";

export function deleteUsers(req: Request, res: Response, next) {
    const id = req.params.id;
    UserService.instance.remove(id)
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(false, null, err));
        });
}
