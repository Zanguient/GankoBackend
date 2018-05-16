import { FincaService } from '../../services/finca-service';
import { Finca } from "../../services/models/finca";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseFinca extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}


export function updateCeba(req, res: Response, next) {
    let finca: Finca = req.body;
    let idFinca = req.params.idFinca;
    FincaService.instance.update(idFinca, finca)
        .then(data => {
            res.send(new ResponseFinca(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseFinca(null, null, err));
        })
}