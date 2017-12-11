import { pajillaService } from '../../services/pajilla-service';
import { Pajilla } from "../../services/models/pajilla";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';

class ResponsePajilla extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function addPajilla(req, res: Response, next) {
    let pajilla = req.body as Pajilla;
    pajillaService.insertPajilla(pajilla)
        .subscribe(data => {
            res.send(new ResponsePajilla(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponsePajilla(null, null, err));
        })
}