import { ManejoService } from '../../services/manejo-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseManejo extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getManejoById(req, res: Response, next) {
    let idManejo = req.params.idManejo;
    ManejoService.instance.getById(idManejo)
        .then(data => {
                res.send(new ResponseManejo(true, data, null));
        }, err => {
            res.status(500).send(new ResponseManejo(null, null, err));
        })
}