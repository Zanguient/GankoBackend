import { Router } from 'express';
import { Q, arrayLength } from '../services/database/query-builder';

const testR: Router = Router();
testR.get('/', (req, res, next) => {
    const q = Q().equalStr("finca", "sasdsasd")
    .and().equalStr("genero", "Hembra")
    .and().gteInt(arrayLength("servicios"), 3)

    q.build()
        .then(x => res.send(x));
});

export default testR;