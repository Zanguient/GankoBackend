import { Request, Response, NextFunction } from "express";
import { BaseService } from "../../services/base-service";
import { sendSuccess } from "../util/ctrl-ext";

export function allByType(type: string, where: string = undefined, params: any[] = []) {
    return function (req: Request, res: Response, next: NextFunction) {
        BaseService.instace.list(type, where, params)
            .then(x => sendSuccess(res, x))
            .catch(err => next(err));
    };
}
