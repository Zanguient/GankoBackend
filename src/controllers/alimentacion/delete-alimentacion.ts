import { alimentacionService } from '../../services/alimentacion-service';
import { Alimentacion } from "../../services/models/alimentacion";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';

class ResponseAlimentacion extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function deleteAlimentacion(req, res: Response, next) {
    let id_alimentacion = req.params.idAlimentacion;
    alimentacionService.getAlimentacion(id_alimentacion)
        .subscribe(data => {
            res.send(new ResponseAlimentacion(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseAlimentacion(null, null, err));
        })
}