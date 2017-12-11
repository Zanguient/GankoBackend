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
export function deletePradera(req, res: Response, next) {
    let id_pradera = req.params.idPradera;
    praderaService.deletePradera(id_pradera)
        .subscribe(data => {
            res.send(new ResponsePradera(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponsePradera(null, null, err));
        })
}