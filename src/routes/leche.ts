import { Router } from 'express';
import { addLeche, getLecheByIdFinca } from '../controllers/index';
import { getLecheById } from '../controllers/leche/get-leche-by-id';
import { ValidateToken } from '../middlewares/token-validation';

const leche: Router = Router();

leche.use(ValidateToken);
leche.get('/finca/:idFinca',getLecheByIdFinca);
leche.get('/:idLeche',getLecheById);
leche.post('/',addLeche);


export default leche;