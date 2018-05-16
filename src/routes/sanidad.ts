import { Router } from 'express';
import { getSanidad, addSanidad, deleteSanidad, updateSanidad} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const sanidad: Router = Router();

sanidad.get('/get-sanidad',ValidateToken,getSanidad);
sanidad.post('/add-sanidad',ValidateToken,addSanidad);
sanidad.delete('/delete-sanidad/:idSanidad',ValidateToken,deleteSanidad);
sanidad.put('/update-sanidad/:idSanidad',ValidateToken,updateSanidad);

export default sanidad;