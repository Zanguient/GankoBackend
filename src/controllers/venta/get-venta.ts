import { VentaService } from '../../services/venta-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { SalidaLeche } from '../../services/models/venta';


class ResponseVenta extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getVenta(req, res: Response, next) {
    
    VentaService.instance.getAll()
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponseVenta(true, data, null));
            }

        }, err => {
            res.status(500).send(new ResponseVenta(null, null, err));
        })
}