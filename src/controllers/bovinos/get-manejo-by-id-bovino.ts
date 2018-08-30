import { AlimentacionService } from '../../services/alimentacion-service';
import { Alimentacion } from "../../services/models/alimentacion";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { SanidadService } from '../../services/sanidad-service';
import { ManejoService } from '../../services/manejo-service';



class ResponseAlimentacion extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}
export function getManejoByIdBovino(req, res: Response, next) {
    let idBovino: string = req.params.idBovino;
    ManejoService.instance.getAllByIdBovino(idBovino)
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponseAlimentacion(true, data, null));
            }

        }, err => {
            res.status(500).send(new ResponseAlimentacion(null, null, err));
        })
}