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
    let idFinca = req.params.idFinca;
    BovinoService.instance.findBovinos(idFinca)
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponseBody(true, data, null));
            }

        }, err => {
            res.status(500).send(new ResponseBody(null, null, err));
        })
}