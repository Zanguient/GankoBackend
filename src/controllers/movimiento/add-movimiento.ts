import { Response, Request } from 'express';
import { ResponseBody } from '../response-body';
import { PraderaService } from '../../services/pradera-service';
import { AlarmaPradera } from '../../services/models/alarma-pradera';
import { Movimiento } from '../../services/models/movimientos';
import { MovimientoService } from '../../services/movimiento-service';
import { toDate } from '../../util/date-util';


class ResponsePradera extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function addMovimiento(req, res: Response, next) {
    let movimiento:Movimiento = req.body;
    MovimientoService.instance.insert(movimiento)
        .then(data => {
                res.send(new ResponsePradera(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePradera(null, null, err));
        })
}