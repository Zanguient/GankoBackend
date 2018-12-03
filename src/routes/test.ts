import { Router } from 'express';
import { Q } from '../services/database/query-builder';

const testR: Router = Router();
testR.get('/', (req, res, next) => {
    const q = Q().equalStr("nombre", "123").and().in("cels", ["123", "123"]).andExp(
        Q().equalInt("edad", 10).or().equalInt("edad", 12)
    );

    q.build()
        .then(x => res.send(x));
});

export default testR;