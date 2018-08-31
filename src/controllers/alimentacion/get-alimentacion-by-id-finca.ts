import { AlimentacionService } from '../../services/alimentacion-service';
import { Alimentacion } from "../../services/models/alimentacion";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';



class ResponseAlimentacion extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}
export function getAlimentacionByIdFinca(req, res: Response, next) {
    let idFinca = req.params.idFinca;
    AlimentacionService.instance.getByIdFinca(idFinca)
        .then(data => {
                res.send(new ResponseAlimentacion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseAlimentacion(null, null, err));
        })
}