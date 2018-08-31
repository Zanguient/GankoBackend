import { ManejoService } from '../../services/manejo-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseManejo extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getManejoByParam(req, res: Response, next) {
    let idFinca = req.params.idFinca;
    let q = req.query.q ? req.query.q : ""
    if(q == "recientes"){
        ManejoService.instance.getByIdFincaReciente(idFinca)
            .then(data => {
                res.send(new ResponseManejo(true, data, null));
            }, err => {
                res.status(500).send(new ResponseManejo(null, null, err));
            })
    }else if(q == "proximos"){
        ManejoService.instance.getByIdFincaProximos(idFinca)
            .then(data => {
                res.send(new ResponseManejo(true, data, null));
            }, err => {
                res.status(500).send(new ResponseManejo(null, null, err));
            })
    }else{
        ManejoService.instance.getByIdFincaPendientes(idFinca)
            .then(data => {
                res.send(new ResponseManejo(true, data, null));
            }, err => {
                res.status(500).send(new ResponseManejo(null, null, err));
            })
    }
        
}