import { Request, Response, NextFunction } from "express";
import { BaseService } from "../../services/base-service";
import { sendSuccess } from "../util/ctrl-ext";

export function allByTrilla(type: string) {
    return function (req: Request, res: Response, next: NextFunction) {
        const id = req.query.trilla;
        const where = id ? "idTrilla = ?" : undefined;
        const params = id ? [id] : undefined;
        BaseService.instace.list(type, where, params)
            .then(x => sendSuccess(res, x))
            .catch(err => next(err));
    };
}
