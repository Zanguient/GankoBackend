import { bovinoService, Bovino } from '../../services/bovino-service'
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';


class ResponseBody {
    constructor(public success: boolean,
        public data: Bovino,
        public err: string) { }
}
export function getBovinos(req, res: Response, next) {
    bovinoService.findBovinos(req.body.idFinca)
        .subscribe(data => {
            res.send(new ResponseBody(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseBody(null, null, err));
        })
}