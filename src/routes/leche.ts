import { Router } from 'express';
import { getLeche, addLeche, deleteLeche, updateLeche} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const leche: Router = Router();

leche.get('/get-leche',ValidateToken,getLeche);
leche.post('/add-leche',ValidateToken,addLeche);
leche.delete('/delete-leche/:idLeche',ValidateToken,deleteLeche);
leche.put('/update-leche/:idLeche',ValidateToken,updateLeche);

export default leche;