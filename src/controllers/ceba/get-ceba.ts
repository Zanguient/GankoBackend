import { cebaService } from '../../services/ceba-service';
import { Ceba } from "../../services/models/ceba";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseCeba extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getCeba(req, res: Response, next) {
    let id_bovino = req.params.idBovino;
    cebaService.getCeba(id_bovino)
        .subscribe(data => {
            res.send(new ResponseCeba(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseCeba(null, null, err));
        })
}