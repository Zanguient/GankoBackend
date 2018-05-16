import { CebaService } from '../../services/ceba-service';
import { Ceba } from "../../services/models/ceba";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseCeba extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getCeba(req, res: Response, next) {
    
    CebaService.instance.getAll()
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponseCeba(true, data, null));
            }

        }, err => {
            res.status(500).send(new ResponseCeba(null, null, err));
        })
}