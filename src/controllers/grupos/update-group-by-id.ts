import { FincaService } from '../../services/finca-service';
import { Finca } from "../../services/models/finca";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { GruposService } from '../../services/grupos-service';
import { Group } from '../../services/models/grupos';


class ResponseGroup extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function updateGroup(req, res: Response, next) {
    let idGrupo = req.params.idGrupo;
    let grupo:Group = req.body.grupo;
    GruposService.instance.update(idGrupo,grupo)
        .then(data => {
                res.send(new ResponseGroup(true, data, null));
        }, err => {
            res.status(500).send(new ResponseGroup(null, null, err));
        })
}