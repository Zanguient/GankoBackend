import { ProduccionService } from '../../services/produccion-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { Produccion } from '../../services/models/produccion';


class ResponseProduccion extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function addProduccion(req, res: Response, next) {
    let produccion = req.body as Produccion;
    
    ProduccionService.instance.insert(produccion)
        .then(data => {
            res.send(new ResponseProduccion(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseProduccion(null, null, err));
        })
}