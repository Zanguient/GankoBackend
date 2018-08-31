import { Response, Request } from 'express';
import { ResponseBody } from '../response-body';
import { MovimientoService } from '../../services/movimiento-service';


class ResponseMovimiento extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getMovimientoByIdFinca(req, res: Response, next) {
    let idFinca = req.params.idFinca;
    MovimientoService.instance.getAllByIdFInca(idFinca)
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponseMovimiento(true, data, null));
            }
        }, err => {
            res.status(500).send(new ResponseMovimiento(null, null, err));
        })
}
