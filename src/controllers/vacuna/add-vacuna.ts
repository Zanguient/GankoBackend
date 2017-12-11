import { vacunaService } from '../../services/vacuna-service';
import { Vacuna } from "../../services/models/vacuna";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseVacuna extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function addVacuna(req, res: Response, next) {
    let vacuna = req.body as Vacuna;
    vacunaService.insertVacuna(vacuna)
        .subscribe(data => {
            res.send(new ResponseVacuna(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseVacuna(null, null, err));
        })
}