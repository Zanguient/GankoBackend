import { SanidadService } from '../../services/sanidad-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { Sanidad,TYPE_SANIDAD } from '../../services/models/sanidad';


class ResponseSanidad extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getSanidadById(req, res: Response, next) {
    let idSanidad = req.params.idSanidad;
    SanidadService.instance.getById(idSanidad)
        .then(data => {
                res.send(new ResponseSanidad(true, data, null));
        }, err => {
            res.status(500).send(new ResponseSanidad(null, null, err));
        })
}