import { Request, Response, NextFunction } from "express";
import { BaseService } from "../../services/base-service";
import { sendSuccess } from "../util/ctrl-ext";

export function insert(req: Request, res: Response, next: NextFunction) {
    const doc = req.body;
    doc.createdAt = new Date();
    doc.updatedAt = new Date();
    BaseService.instace.add(doc)
        .then(x => sendSuccess(res, x))
        .catch(err => next(err));
}