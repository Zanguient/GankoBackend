import { servicioService } from '../../services/servicio-service';
import { Servicio } from "../../services/models/servicio";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseServicio extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function addServicio(req, res: Response, next) {
    let servicio = req.body as Servicio;
    servicioService.insertServicio(servicio)
        .subscribe(data => {
            res.send(new ResponseServicio(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseServicio(null, null, err));
        })
}