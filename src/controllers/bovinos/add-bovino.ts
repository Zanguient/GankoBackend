import { BovinoService } from '../../services/bovino-service';
import { Bovino } from "../../services/models/bovinos";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseBovino extends ResponseBody {
    constructor(success: boolean, public data, error: string) {
        super(success, error);
    }
}

export function addBovino(req, res: Response, next) {
    let bovino = req.body as Bovino;
    BovinoService.instance.addBovino(bovino)
        .then(data => res.send(new ResponseBovino(data ? true : false, data, data ? null : 'El codigo ya se encuentra registrado'))
            , err => res.status(500).send(new ResponseBovino(null, null, err)))
}