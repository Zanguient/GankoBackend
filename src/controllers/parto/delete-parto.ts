import { partoService } from '../../services/parto-service';
import { Parto } from "../../services/models/parto";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseParto extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}
export function deleteParto(req, res: Response, next) {
    let id_parto = req.params.idParto;
    partoService.deleteParto(id_parto)
        .subscribe(data => {
            res.send(new ResponseParto(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseParto(null, null, err));
        })
}