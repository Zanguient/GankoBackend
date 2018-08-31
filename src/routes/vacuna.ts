import { Router } from 'express';
import { getVacuna, addVacuna, deleteVacuna, updateVacuna} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getVacunaByID } from '../controllers/vacuna/get-vacuna';

const vacuna: Router = Router();

ValidateToken;
vacuna.get('/:idVacuna',getVacunaByID);
vacuna.post('/',addVacuna);


vacuna.delete('/delete-vacuna/:idVacuna',ValidateToken,deleteVacuna);
vacuna.put('/update-vacuna/:idVacuna',ValidateToken,updateVacuna);

export default vacuna;