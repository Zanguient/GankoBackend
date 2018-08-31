import { Response, Request } from 'express';
import { ResponseBody } from '../response-body';
import { PraderaService } from '../../services/pradera-service';


class ResponsePradera extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getPraderaById(req, res: Response, next) {
    let idPradera = req.params.idPradera;
    PraderaService.instance.getById(idPradera)
        .then(data => {
                res.send(new ResponsePradera(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePradera(null, null, err));
        })
}