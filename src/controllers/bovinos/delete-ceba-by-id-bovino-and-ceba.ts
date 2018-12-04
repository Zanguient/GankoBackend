import { BovinoService } from '../../services/bovino-service';
import { Bovino } from "../../services/models/bovinos";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { CebaService } from '../../services/ceba-service';

class ResponseBovino extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function deleteCebaByIdBovinoAndCeba(req, res: Response, next) {
    CebaService.instance.deleteByIdBovinoAndCeba(req.params.idBovino, req.params.idCeba)
        .then(data => {
            res.send(new ResponseBovino( true , data, null));
        }, err => {
            res.status(500).send(new ResponseBovino(null, null, err));
        })
}