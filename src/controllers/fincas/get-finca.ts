import { fincaService, Finca } from '../../services/finca-service'
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';


class ResponseBody {
    constructor(public success: boolean,
        public data: Finca,
        public err: string) { }
}
export function getFinca(req, res: Response, next) {
    fincaService.findFincas(req.body.id)
        .subscribe(data => {
            res.send(new ResponseBody(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseBody(null, null, err));
        })
}