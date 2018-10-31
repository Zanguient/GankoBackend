import { Response, Request } from 'express';
import { ResponseBody } from '../response-body';
import { PraderaService } from '../../services/pradera-service';
import { Pradera } from '../../services/models/praderas';


class ResponsePradera extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getPraderaByIdFarm(req, res: Response, next) {
    let idFarm: string = req.params.idFinca;
    PraderaService.instance.getAllByIdFarm(idFarm)
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponsePradera(true, data, null));
            } else {
                createPraderasIfNotExists(idFarm, res);
            }
        }, err => {
            res.status(500).send(new ResponsePradera(null, null, err));
        })
}

function createPraderasIfNotExists(idFinca: string, res: Response) {
    let pradera = new Pradera(idFinca);
    let count = 0;
    for (let _i = 0; _i < 100; _i++) {
        PraderaService.instance.insert(pradera,_i)
            .then(data => {
                count += 1;
                if (count == 99) {
                    setTimeout(() => {
                        PraderaService.instance.getAllByIdFarm(idFinca)
                            .then(data => {
                                res.send(new ResponsePradera(true, data, null));
                            }, err => {
                                res.status(500).send(new ResponsePradera(null, null, err));
                            })
                    }, 250)

                }
            })
    }


}