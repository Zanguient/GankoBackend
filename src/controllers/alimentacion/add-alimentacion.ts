import { AlimentacionService } from '../../services/alimentacion-service';
import { Alimentacion } from "../../services/models/alimentacion";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { toDateEmb } from '../../util/date-util';


class ResponseAlimentacion extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function addAlimentacion(req, res: Response, next) {
    let alimentacion = req.body as Alimentacion;
    AlimentacionService.instance.insert(alimentacion)
        .then(data => {
            res.send(new ResponseAlimentacion(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseAlimentacion(null, null, err));
        })
}