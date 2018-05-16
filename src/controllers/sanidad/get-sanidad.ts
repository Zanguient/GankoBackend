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

export function getSanidad(req, res: Response, next) {
    
    SanidadService.instance.getAll()
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponseSanidad(true, data, null));
            }

        }, err => {
            res.status(500).send(new ResponseSanidad(null, null, err));
        })
}