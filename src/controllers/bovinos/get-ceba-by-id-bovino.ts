import { AlimentacionService } from '../../services/alimentacion-service';
import { Alimentacion } from "../../services/models/alimentacion";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { SanidadService } from '../../services/sanidad-service';
import { CebaService } from '../../services/ceba-service';



class ResponseAlimentacion extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}
export function getCebaByIdBovino(req, res: Response, next) {
    let idBovino: string = req.params.idBovino;
    CebaService.instance.getAllByIdBovino(idBovino)
        .then(data => {
                res.send(new ResponseAlimentacion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseAlimentacion(null, null, err));
        })
}