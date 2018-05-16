import { Router } from 'express';
import { getManejo, addManejo, deleteManejo, updateManejo} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const manejo: Router = Router();

manejo.get('/get-manejo',ValidateToken,getManejo);
manejo.post('/add-manejo',ValidateToken,addManejo);
manejo.delete('/delete-manejo/:idManejo',ValidateToken,deleteManejo);
manejo.put('/update-manejo/:idManejo',ValidateToken,updateManejo);

export default manejo;