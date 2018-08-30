import { Router } from 'express';
import { getLeche, addLeche, deleteLeche, updateLeche} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getLecheByIdFinca } from '../controllers/leche/get-leche';

const leche: Router = Router();

ValidateToken;
leche.get('/finca/:idFinca',getLecheByIdFinca);


export default leche;