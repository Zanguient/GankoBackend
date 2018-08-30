import { Request, Response, NextFunction } from "express";
import { BaseService } from "../../services/base-service";
import { sendSuccess, sendFail } from "../util/ctrl-ext";

export function insertUser(req: Request, res: Response, next: NextFunction) {
    const doc = req.body;
    doc.createdAt = new Date();
    doc.updatedAt = new Date();

    BaseService.instace.bytypeDoc(doc.type, doc.usuario.documento)
        .then(x => {
            if (x) {
                sendFail(res, "El usuario ya se encuentra registrado");
            } else {
                return BaseService.instace.add(doc)
                    .then(x => sendSuccess(res, x));
            }
        })
        .catch(err => next(err));
}