import { LecheService } from '../../services/leche-service';
import { Produccion } from "../../services/models/produccion";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseLeche extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}


export function getLecheByIdFinca(req, res: Response, next) {
    let idFinca = req.params.idFinca;
    LecheService.instance.getAllByIdFInca(idFinca)
        .then(data => {
                res.send(new ResponseLeche(true, data, null));
        }, err => {
            res.status(500).send(new ResponseLeche(null, null, err));
        })
}