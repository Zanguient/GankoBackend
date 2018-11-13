import { Response } from 'express';
import { BovinoService } from '../../services/bovino-service';
import { Bovino } from "../../services/models/bovinos";
import { toDate } from '../../util/date-util';
import { ResponseBody } from '../response-body';


class ResponseBovino extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function updateBovino(req, res: Response, next) {
    let bovino: Bovino = req.body;
    let idbovino = req.params.idBovino;

    toDate(bovino, 'fechaNacimiento', 'fechaIngreso',
        'fechaSalida', 'fechaDestete',
        'fechaProximoCelo');

    if (bovino.celos) {
        bovino.celos = bovino.celos.map(x => new Date(x));
    }

    if (bovino.servicios) {
        bovino.servicios = bovino.servicios.map(x => {
            toDate(x, 'fecha', 'fechaUltimoCelo', 'posFechaParto');
            if(x.diagnostico){
                toDate(x.diagnostico, 'fecha')
            }
        
            if(x.parto){
                toDate(x.parto, 'fecha')
            }
        
            if(x.novedad){
                toDate(x.novedad, 'fecha')
            }
            return x;
        });
    }

    BovinoService.instance.updateBovino(idbovino, bovino)
        .then(data => {
            res.send(new ResponseBovino(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseBovino(null, null, err));
        })
} 