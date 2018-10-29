import { Request, Response } from 'express';
import { LecheService } from '../../services/leche-service';
import { Produccion } from '../../services/models/produccion';



class ResponseBody {
    constructor(public success: boolean,
        public data: any,
        public err: string) { }
}

export function addMilkByIdBovino(req: Request, res: Response, next) {
    let leche: Produccion = req.body;

    let idBovino = req.params.idBovino;
    LecheService.instance.insert(leche)
        .then(data => {
            res.send(new ResponseBody(true, data, null));

        }, err => {
            res.status(500).send(new ResponseBody(null, null, err));
        })
}