import { Router } from 'express';
import { getVacuna, addVacuna, deleteVacuna, updateVacuna} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const vacuna: Router = Router();

vacuna.get('/get-vacuna',ValidateToken,getVacuna);
vacuna.post('/add-vacuna',ValidateToken,addVacuna);
vacuna.delete('/delete-vacuna/:idVacuna',ValidateToken,deleteVacuna);
vacuna.put('/update-vacuna/:idVacuna',ValidateToken,updateVacuna);

export default vacuna;