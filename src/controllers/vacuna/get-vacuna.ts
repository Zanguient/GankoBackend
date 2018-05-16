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

export function getVacuna(req, res: Response, next) {
    
    VacunaService.instance.getAll()
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponseVacunas(true, data, null));
            }

        }, err => {
            res.status(500).send(new ResponseVacunas(null, null, err));
        })
}