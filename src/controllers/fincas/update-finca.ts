import { fincaService } from '../../services/finca-service';
import { Finca } from "../../services/models/finca";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';

class ResponseFinca extends ResponseBody{
    constructor(success:boolean,public data,err:string){
        super(success,err);
    }
}

export function updateFinca(req, res: Response, next) {
    let idfinca = req.params.idfinca;
    let finca:Finca = req.body;
    finca.usuario = req.id;
    fincaService.updateFinca(idfinca,finca)
        .subscribe(data => {
            res.send(new ResponseFinca(true,data, null));
        }, err => {
            res.status(500).send(new ResponseFinca(false, null, err));
        })
}