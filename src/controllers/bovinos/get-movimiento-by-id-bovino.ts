import { Response, Request } from 'express';
import { ResponseBody } from '../response-body';
import { MovimientoService } from '../../services/movimiento-service';


class ResponseMovimiento extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getMovimientoByIdBovino(req, res: Response, next) {
    let idBovino = req.params.idBovino;
    MovimientoService.instance.getAllByIdBovino(idBovino)
        .then(data => {
                res.send(new ResponseMovimiento(true, data, null));
        }, err => {
            res.status(500).send(new ResponseMovimiento(null, null, err));
        })
}
