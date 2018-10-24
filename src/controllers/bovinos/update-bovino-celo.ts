import { BovinoService } from '../../services/bovino-service';
import { Bovino } from "../../services/models/bovinos";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseBovino extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function updateBovinoCelo(req, res: Response, next) {
    let date: Date = new Date(req.body.date);
    let idbovino = req.params.idBovino;
    let bovino = new Bovino;
    BovinoService.instance.findById(idbovino)
        .then(result => {
            bovino = result.doc as Bovino;
            if(!bovino.celos){
                bovino.celos = [date];
            }else{
                bovino.celos.unshift(date);
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