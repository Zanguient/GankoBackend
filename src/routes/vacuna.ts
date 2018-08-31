import { Router } from 'express';
import { getVacuna, addVacuna, deleteVacuna, updateVacuna} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getVacunaByID } from '../controllers/vacuna/get-vacuna';
import { getVacunaByParam } from '../controllers/vacuna/get-vacuna-by-param';

const vacuna: Router = Router();

ValidateToken;
vacuna.get('/:idVacuna',getVacunaByID);
vacuna.post('/',addVacuna);
vacuna.get('/finca/:idFinca',getVacunaByParam);

export default vacuna;