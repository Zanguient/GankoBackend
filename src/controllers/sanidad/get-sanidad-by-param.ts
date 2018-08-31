import { ManejoService } from '../../services/manejo-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { VacunaService } from '../../services/vacuna-service';
import { SanidadService } from '../../services/sanidad-service';


class ResponseManejo extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getSanidadByParam(req, res: Response, next) {
    let idFinca = req.params.idFinca;
    let q = req.query.q ? req.query.q : ""
    if(q == "recientes"){
        SanidadService.instance.getByIdFincaReciente(idFinca)
            .then(data => {
                res.send(new ResponseManejo(true, data, null));
            }, err => {
                res.status(500).send(new ResponseManejo(null, null, err));
            })
    }else if(q == "proximos"){
        SanidadService.instance.getByIdFincaProximos(idFinca)
            .then(data => {
                res.send(new ResponseManejo(true, data, null));
            }, err => {
                res.status(500).send(new ResponseManejo(null, null, err));
            })
    }else{
        SanidadService.instance.getByIdFincaPendientes(idFinca)
            .then(data => {
                res.send(new ResponseManejo(true, data, null));
            }, err => {
                res.status(500).send(new ResponseManejo(null, null, err));
            })
    }
        
}