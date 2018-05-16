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

export function deleteVenta(req, res: Response, next) {
    VentaService.instance.delete(req.params.idVenta)
        .then(data => {
            res.send(new ResponseVenta(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseVenta(null, null, err));
        })
}