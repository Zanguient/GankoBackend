import { BovinoService } from '../../services/bovino-service';
import { Bovino } from "../../services/models/bovinos";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';


class ResponseBody {
    constructor(public success: boolean,
        public data: any,
        public err: string) { }
}

export function getBovinos(req, res: Response, next) {

    let q: string = req.query.q ? req.query.q : "";
    let leche: boolean = req.query.leche ? req.query.leche : false;
    let ceba: boolean = req.query.ceba ? req.query.ceba : false;
    let ambos: boolean = req.query.ambos ? req.query.ambos : false;
    let celo: boolean = req.query.celo ? req.query.celo : false;
    let servicio: boolean = req.query.servicio ? req.query.servicio : false;
    let diagnostico: boolean = req.query.diagnostico ? req.query.diagnostico : false;
    let destete: boolean = req.query.destete ? req.query.destete : false;
    let retirados: boolean = req.query.retirados ? req.query.retirados : false;
    let sexo: string = req.query.sexo ? req.query.sexo : ""

    let idFinca = req.params.idFinca;
    BovinoService.instance.findBovinos(idFinca, q, leche, ceba, ambos, celo, servicio, diagnostico, destete, retirados, sexo)
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponseBody(true, data, null));
            }

        }, err => {
            res.status(500).send(new ResponseBody(null, null, err));
        })
}