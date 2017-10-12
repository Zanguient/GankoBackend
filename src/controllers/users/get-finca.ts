import { fincaService, Finca } from '../../services/finca-service'
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';


interface RequestBody {
    user: string;
}

class ResponseBody {
    constructor(public success: boolean,
        public data: Finca,
        public err: string) { }
}
export function getFinca(req: Request, res: Response, next){
    let fincas = req.body as RequestBody;
    fincaService.findFincas(fincas.user)
    .subscribe(data => {
        res.send(new ResponseBody(data? true:false,data,null));
    }, err => {
        res.status(500).send(new ResponseBody(null,null,err));
    })
}