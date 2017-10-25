import { fincaService, Finca } from '../../services/finca-service'
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body'

class ResponseFinca{
    constructor(success:boolean,public data,err:string){
    }
}

export function deleteFinca(req,res,next){
    let idFinca = req.params.idfinca;
    fincaService.deleteFinca(idFinca)
    .subscribe(data=>{
        res.send(new ResponseFinca(true,data, null));
    }, err => {
        res.status(500).send(new ResponseFinca(false, null, err));
    })

}