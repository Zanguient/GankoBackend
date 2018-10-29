import { Response } from 'express';
import { ProduccionService } from '../../services/produccion-service';


class ResponseBody {
    constructor(public success: boolean,
        public data: any,
        public err: string) { }
}

export function getMilkByIdBovino(req, res: Response, next) {

    let idBovino: string = req.params.idBovino;
    ProduccionService.instance.getByIdBovino(idBovino)
        .then(data => {
            res.send(new ResponseBody(true, data, null));
        }, err => {
            res.status(500).send(new ResponseBody(null, null, err));
        })
}