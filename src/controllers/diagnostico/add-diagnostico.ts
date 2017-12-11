import { diagnosticoService } from '../../services/diagnostico-service';
import { Diagnostico } from "../../services/models/diagnostico";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseDiagnostico extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function addDiagnostico(req, res: Response, next) {
    let diagnostico = req.body as Diagnostico;
    diagnosticoService.insertDiagnostico(diagnostico)
        .subscribe(data => {
            res.send(new ResponseDiagnostico(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseDiagnostico(null, null, err));
        })
}