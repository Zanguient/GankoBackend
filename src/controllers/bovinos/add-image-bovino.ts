import { bovinoService } from '../../services/bovino-service'
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body'
import { loadCollection } from './../../config/global'
import * as multer from 'multer'
import * as Loki from 'lokijs'

export const COLLECTION_NAME = 'images';
const DB_NAME = 'db.json';
export const UPLOAD_PATH = 'uploadedImages'
export const upload = multer({ dest: `${UPLOAD_PATH}/` });
export const db = new Loki(`${UPLOAD_PATH}/${DB_NAME}`, { persistenceMethod: 'fs' });


class ResponseImageBovino extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}


export async function addImageBovino(req, res, next) {
    let idBovino = req.params.idbovino;
    let file;
    try {
        const col = await loadCollection(COLLECTION_NAME, db);
        file = col.insert(req.file);
        db.saveDatabase();
    } catch (err) {
        res.sendStatus(400);
    }
    bovinoService.updateImageBovino(idBovino,file.$loki)
    .subscribe(data=>{
        res.send(new ResponseImageBovino(data ? true : false, data, null));
    }, err => {
        res.status(500).send(new ResponseImageBovino(null, null, err));
    })


}