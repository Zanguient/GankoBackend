import { fincaService, Finca } from '../../services/finca-service'
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body'

class ResponseFinca extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function addFinca(req, res: Response, next) {
    let finca:Finca = req.body;
    finca.usuario = req.id;
    fincaService.addFinca(finca)
        .subscribe(data => {
            res.send(new ResponseFinca(true, data, null));
        }, err => {
            res.status(500).send(new ResponseFinca(false, null, err));
        })
}