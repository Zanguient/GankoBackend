import { BovinoService } from '../../services/bovino-service';
import { Bovino, Servicio } from "../../services/models/bovinos";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseBovino extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function updateBovinoNovedad(req, res: Response, next) {
    let servicio: Servicio = req.body;
    let idbovino = req.params.idbovino;
    let bovino = new Bovino;
    BovinoService.instance.findById(idbovino)
        .then(result => {
            bovino = result.doc as Bovino;
            bovino.servicios[0] = servicio;
            if(servicio.parto){
                bovino.partos = servicio.parto.numero;
            }
            return bovino;
        })
        .then(bov => {
            return BovinoService.instance.updateBovino(idbovino, bov)
        })
        .then(data => {
            res.send(new ResponseBovino(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseBovino(null, null, err));
        })

}