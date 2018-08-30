import { Request, Response, NextFunction } from "express";
import { BaseService } from "../../services/base-service";
import { sendSuccess } from "../util/ctrl-ext";

export function byId(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    BaseService.instace.byId(id)
        .then(x => sendSuccess(res, x))
        .catch(err => next(err));
}