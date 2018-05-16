import { VacunaService } from '../../services/vacuna-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { RegistroVacunas } from '../../services/models/vacunas';


class ResponseVacunas extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}
export function addVacuna(req, res: Response, next) {
    let sanidad = req.body as RegistroVacunas;
    VacunaService.instance.insert(sanidad)
        .then(data => {
            res.send(new ResponseVacunas(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseVacunas(null, null, err));
        })
}