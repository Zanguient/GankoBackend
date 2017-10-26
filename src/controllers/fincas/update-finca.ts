import { fincaService } from '../../services/finca-service'
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body'

interface RequestBody {
    nombre: string;
    ubicacion: string;
    hectareas: string;
    usuario: string;
}

class ResponseFinca extends ResponseBody{
    constructor(success:boolean,public data,err:string){
        super(success,err);
    }
}

export function updateFinca(req, res: Response, next) {
    let idfinca = req.params.idfinca;
    let finca = req.body as RequestBody;
    finca.usuario = req.id;
    fincaService.updateFinca(idfinca,finca.nombre,finca.ubicacion,finca.hectareas,finca.usuario)
        .subscribe(data => {
            res.send(new ResponseFinca(true,data, null));
        }, err => {
            res.status(500).send(new ResponseFinca(false, null, err));
        })
}