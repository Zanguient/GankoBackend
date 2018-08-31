import { FincaService } from '../../services/finca-service';
import { Finca } from "../../services/models/finca";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { GruposService } from '../../services/grupos-service';


class ResponseGroup extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}


export function getGroupById(req, res: Response, next) {
    let idGroup = req.params.idGroup;
    GruposService.instance.getById(idGroup)
        .then(data => {
                res.send(new ResponseGroup(true, data, null));
        }, err => {
            res.status(500).send(new ResponseGroup(null, null, err));
        })
}