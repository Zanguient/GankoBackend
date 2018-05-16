import { ManejoService } from '../../services/manejo-service';
import { RegistroManejo } from "../../services/models/manejo";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseManejo extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function updateManejo(req, res: Response, next) {
    let manejo: RegistroManejo = req.body;
    let idManejo = req.params.idProduccion;
    ManejoService.instance.update(idManejo, manejo)
        .then(data => {
            res.send(new ResponseManejo(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseManejo(null, null, err));
        })
}