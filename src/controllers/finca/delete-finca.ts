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

export function deleteFinca(req, res: Response, next) {
    FincaService.instance.delete(req.params.idFinca)
        .then(data => {
            res.send(new ResponseFinca(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseFinca(null, null, err));
        })
}