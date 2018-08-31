import { Request, Response, NextFunction } from "express";
import { BaseService } from "../../services/base-service";
import { sendSuccess } from "../util/ctrl-ext";

export function replace(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const doc = req.body;
    doc.updatedAt = new Date();
    BaseService.instace.replace(id, doc)
        .then(x => sendSuccess(res, x))
        .catch(err => next(err));
}