import { bovinoService } from '../../services/bovino-service'
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body'
import { COLLECTION_NAME, db, UPLOAD_PATH } from './add-image-bovino'
import { loadCollection } from './../../config/global'
import * as fs from 'fs';
import * as path from 'path';

export async function getImageBovino(req, res, next) {
    const col = await loadCollection(COLLECTION_NAME, db);
    let idBovino = req.params.idbovino;
    bovinoService.findById(idBovino)
    .subscribe(data=>{
        try {
            let idimagen = data[0].imagen;
            const result = col.get(idimagen);
            if (!result) {
                res.sendStatus(404);
                return;
            };
            res.setHeader('Content-Type', result.mimetype);
            fs.createReadStream(path.join(UPLOAD_PATH, result.filename)).pipe(res);
        } catch (err) {
            res.sendStatus(400);
        }
    })
    


}