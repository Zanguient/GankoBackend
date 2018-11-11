import { ResponseBody } from "../response-body";
import { Response } from "express";
import { UserService } from "../../services/user-service";

export class ResponseUser extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listUsers(req, res: Response, next) {
    const limit = req.query.limit ? parseInt(req.query.limit): undefined;
    const skip = req.query.skip ? parseInt(req.query.skip): undefined;
    
    UserService.instance.list(limit, skip)
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(null, null, err));
        });
}
