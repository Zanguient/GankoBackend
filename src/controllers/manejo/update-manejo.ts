import { ManejoService } from '../../services/manejo-service';
import { Manejo } from "../../services/models/manejo";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { toDate } from '../../util/date-util';


class ResponseManejo extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function updateManejo(req, res: Response, next) {
    let manejo: Manejo = req.body;
    let idManejo = req.params.idProduccion;
    ManejoService.instance.update(idManejo, manejo)
        .then(data => {
            res.send(new ResponseManejo(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseManejo(null, null, err));
        })
}