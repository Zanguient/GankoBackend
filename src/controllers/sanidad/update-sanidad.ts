import { SanidadService } from '../../services/sanidad-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { RegistroSanidad } from '../../services/models/sanidad';


class ResponseSanidad extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}
export function updateSanidad(req, res: Response, next) {
    let sanidad: RegistroSanidad = req.body;
    let idSanidad = req.params.idSanidad;
    SanidadService.instance.update(idSanidad, sanidad)
        .then(data => {
            res.send(new ResponseSanidad(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseSanidad(null, null, err));
        })
}