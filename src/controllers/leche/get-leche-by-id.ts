import { Response } from 'express';
import { LecheService } from '../../services/leche-service';
import { ResponseBody } from '../response-body';


class ResponseLeche extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getLecheById(req, res: Response, next) {
    let idLeche = req.params.idLeche;
    LecheService.instance.getById(idLeche)
        .then(data => {
            res.send(new ResponseLeche(true, data, null));
        }, err => {
            res.status(500).send(new ResponseLeche(null, null, err));
        })
}