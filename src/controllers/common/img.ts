import { NextFunction, Request, Response } from "express";
import { BaseService } from "../../services/base-service";

export function imgByDigest(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    console.log("IMG =>" + id);
    BaseService.instace.img(id)
        .then(x => res.contentType("image/webp").send(x))
        .catch(err => {
            console.log("ERR=>" + err);
            res.status(400).send("Imagen no encontrada");
        });
}