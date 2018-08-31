import { PajillaService } from '../../services/pajilla-service';
import { Straw } from "../../services/models/pajilla";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponsePajilla extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getPajillasyIdFinca(req, res: Response, next) {
    let q = req.query.q;
    let idFinca = req.params.idFinca;

    PajillaService.instance.getAllByIdFinca(idFinca,q)
        .then(data => {
                res.send(new ResponsePajilla(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePajilla(null, null, err));
        })
}