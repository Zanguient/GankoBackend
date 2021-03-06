import { CebaService } from '../../services/ceba-service';
import { Meat,TYPE_CEBA } from "../../services/models/ceba";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { toDate } from '../../util/date-util';


class ResponseCeba extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function addCeba(req, res: Response, next) {
    let ceba = req.body as Meat;
    CebaService.instance.insert(ceba)
        .then(data => {
            res.send(new ResponseCeba(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseCeba(null, null, err));
        })
}