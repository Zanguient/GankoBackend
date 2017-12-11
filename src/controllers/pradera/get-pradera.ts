import { praderaService } from '../../services/pradera-service';
import { Pradera } from "../../services/models/pradera";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponsePradera extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}
export function getPradera(req, res: Response, next) {
    let id_finca = req.params.idFinca;
    praderaService.getPraderas(id_finca)
        .subscribe(data => {
            res.send(new ResponsePradera(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponsePradera(null, null, err));
        })
}