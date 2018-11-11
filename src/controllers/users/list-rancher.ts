import { ResponseBody } from "../response-body";
import { Response } from "express";
import { UserService } from "../../services/user-service";
import { ResponseUser } from "./list";

export function listRanchers(req, res: Response, next) {
    const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
    const skip = req.query.skip ? parseInt(req.query.skip) : undefined;
    const q = req.query.q;
    UserService.instance.listRanchers(q, limit, skip)
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(null, null, err));
        });
}
