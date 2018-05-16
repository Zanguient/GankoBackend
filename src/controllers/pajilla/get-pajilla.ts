import { PajillaService } from '../../services/pajilla-service';
import { Pajilla } from "../../services/models/pajilla";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponsePajilla extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getPajilla(req, res: Response, next) {
    
    PajillaService.instance.getAll()
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponsePajilla(true, data, null));
            }

        }, err => {
            res.status(500).send(new ResponsePajilla(null, null, err));
        })
}