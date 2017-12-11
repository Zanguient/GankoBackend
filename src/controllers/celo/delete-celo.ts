import { celoService } from '../../services/celo-service';
import { Celo } from "../../services/models/celo";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';

class ResponseCelo extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function deleteCelo(req, res: Response, next) {
    let id_celo = req.params.idCelo;
    celoService.deleteCelo(id_celo)
        .subscribe(data => {
            res.send(new ResponseCelo(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseCelo(null, null, err));
        })
}