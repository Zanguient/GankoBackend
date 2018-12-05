import { Router } from 'express';
import { Q, arrayLength } from '../services/database/query-builder';

const testR: Router = Router();
testR.get('/', (req, res, next) => {
    const q = Q().equalStr("finca", "asdasd")
    .and().isNotNull("servicios")
    .and().gtInt(arrayLength("servicios"), 0)
    .and().equalBool("servicios[0].finalizado", false)
    .and().isNotNull("servicios[0].posFechaParto")
    .or().isNotMissing("servicios[0].posFechaParto")

    q.build()
        .then(x => res.send(x));
});

export default testR;