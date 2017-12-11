import { controlService } from '../../services/control-service';
import { Control } from "../../services/models/control";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseControl extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}
export function deleteControl(req, res: Response, next) {
    let id_control = req.params.idControl;
    controlService.deleteControl(id_control)
        .subscribe(data => {
            res.send(new ResponseControl(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseControl(null, null, err));
        })
}