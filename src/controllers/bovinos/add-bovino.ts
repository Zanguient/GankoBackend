import { bovinoService, Bovino } from '../../services/bovino-service'
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body'


class ResponseBovino extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function addBovino(req, res: Response, next) {
    let bovino = req.body as RequestBody;
    bovinoService.addBovino(bovino.idBovino, bovino.imagen, bovino.name, bovino.fecha, bovino.genero, bovino.proposito,
        bovino.peso, bovino.color, bovino.raza, bovino.idMadre, bovino.idPadre, bovino.salida, bovino.lote, bovino.salidaPor,
        bovino.numeroPartos, bovino.partoFallo, bovino.fechaSalida, bovino.finca, bovino.usuario)
        .subscribe(data => {
            res.send(new ResponseBovino(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseBovino(null, null, err));
        })
}

interface RequestBody {
    idBovino: string,
    imagen: string,
    name: string,
    fecha: Date,
    genero: string,
    proposito: string,
    peso: number,
    color: string,
    raza: string,
    idMadre: string,
    idPadre: string,
    salida: string,
    lote: string,
    salidaPor: string,
    numeroPartos: number,
    partoFallo: string,
    fechaSalida: Date,
    finca: number,
    usuario: number
}