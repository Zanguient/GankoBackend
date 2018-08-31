import { VacunaService } from '../../services/vacuna-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { TYPE_VACUNA,Vacuna } from '../../services/models/vacunas';


class ResponseVacunas extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getVacunaByID(req, res: Response, next) {
    let idVacuna = req.params.idVacuna;
    VacunaService.instance.getById(idVacuna)
        .then(data => {
                res.send(new ResponseVacunas(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVacunas(null, null, err));
        })
}