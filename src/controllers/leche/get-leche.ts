import { lecheService } from '../../services/leche-service';
import { Leche } from "../../services/models/leche";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseLeche extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}
export function getLeche(req, res: Response, next) {
    let id_leche = req.params.idLeche;
    lecheService.getLeche(id_leche)
        .subscribe(data => {
            res.send(new ResponseLeche(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseLeche(null, null, err));
        })
}