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

export function getProduccion(req, res: Response, next) {
    
    ProduccionService.instance.getAll()
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponseProduccion(true, data, null));
            }

        }, err => {
            res.status(500).send(new ResponseProduccion(null, null, err));
        })
}