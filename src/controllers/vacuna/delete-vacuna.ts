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
export function deleteVacuna(req, res: Response, next) {
    let id_vacuna = req.params.idVacuna;
    vacunaService.deleteVacuna(id_vacuna)
        .subscribe(data => {
            res.send(new ResponseVacuna(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseVacuna(null, null, err));
        })
}