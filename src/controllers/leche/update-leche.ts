import { Response } from 'express';
import { LecheService } from '../../services/leche-service';
import { ResponseBody } from '../response-body';
import { Leche } from '../../services/models/leche';


class ResponseLeche extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function updateLeche(req, res: Response, next) {
    let leche: Leche = req.body;
    let idProduccion = req.params.idProduccion;
    LecheService.instance.update(idProduccion, leche)
        .then(data => {
            res.send(new ResponseLeche(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseLeche(null, null, err));
        })
}