import { NextFunction, Request, Response } from "express";
import { FileService } from "../../services/file-servoce";

export function getImg(req: Request, res: Response, next: NextFunction) {
    const id = req.params.digest;
    FileService.instace.file(id)
        .then(x => res.contentType("image/jpeg").send(x))
        .catch(err => {
            console.log("ERR=>" + err);
            res.status(400).send("Imagen no encontrada");
        });
}