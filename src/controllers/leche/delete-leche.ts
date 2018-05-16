import { LecheService } from '../../services/leche-service';
import { Produccion } from "../../services/models/produccion";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseLeche extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function deleteLeche(req, res: Response, next) {
    LecheService.instance.delete(req.params.idLeche)
        .then(data => {
            res.send(new ResponseLeche(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseLeche(null, null, err));
        })
}