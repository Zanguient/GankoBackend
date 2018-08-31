import { BovinoService } from '../../services/bovino-service';
import { Bovino } from "../../services/models/bovinos";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { LecheService } from '../../services/leche-service';


class ResponseBody {
    constructor(public success: boolean,
        public data: any,
        public err: string) { }
}

export function getMilkByIdBovino(req, res: Response, next) {

    let idBovino = req.params.idBovino;
    LecheService.instance.getByIdBovino(idBovino)
        .then(data => {
                res.send(new ResponseBody(true, data, null));
        }, err => {
            res.status(500).send(new ResponseBody(null, null, err));
        })
}