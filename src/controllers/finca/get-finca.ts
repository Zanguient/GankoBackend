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

export function getFinca(req, res: Response, next) {
    FincaService.instance.getAll(req.id)
        .then(data => res.send(new ResponseFinca(true, data, null)))
        .catch(err => res.status(500).send(new ResponseFinca(null, null, err)));
}