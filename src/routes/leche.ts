import { Router } from 'express';
import { getLecheByIdFinca, addLeche, deleteLeche, updateLeche} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getLecheById } from '../controllers/leche/get-leche-by-id';

const leche: Router = Router();

leche.use(ValidateToken);
leche.get('/finca/:idFinca',getLecheByIdFinca);
leche.get('/:idLeche',getLecheById);
leche.post('/',addLeche);


export default leche;