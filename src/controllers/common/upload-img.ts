import { Response, Request, NextFunction } from "express";
import { FileService } from "../../services/file-servoce";
import { sendSuccess } from "../util/ctrl-ext";

interface RequestImg {
    name: string;
    base64: string;
}

export function uploadImage(req: Request, res: Response, next: NextFunction) {
    const img: RequestImg = req.body;
    const id: string = req.params.id;

    FileService.instace.saveFile(id, img.name ? img.name : (new Date()).getTime() + '.jpg', "image/jpg", img.base64, 'imagen')
        .then(x => sendSuccess(res, x))
        .catch(err => next(err));
}