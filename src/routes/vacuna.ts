import { Router } from 'express';
import { addVacuna, updateVacuna } from '../controllers/index';
import { getVacunaByID } from '../controllers/vacuna/get-vacuna';
import { getVacunaByParam } from '../controllers/vacuna/get-vacuna-by-param';
import { ValidateToken } from '../middlewares/token-validation';

const vacuna: Router = Router();

vacuna.use(ValidateToken);
vacuna.get('/:idVacuna',getVacunaByID);
vacuna.post('/',addVacuna);
vacuna.get('/finca/:idFinca',getVacunaByParam);
vacuna.put('/:idVacuna', updateVacuna);

export default vacuna;