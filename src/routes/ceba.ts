import { Router } from 'express';
import { getCeba, addCeba, deleteCeba, updateCeba} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const ceba: Router = Router();

ceba.get('/get-ceba',ValidateToken,getCeba);
ceba.post('/add-ceba',ValidateToken,addCeba);
ceba.delete('/delete-ceba/:idCeba',ValidateToken,deleteCeba);
ceba.put('/update-ceba/:idCeba',ValidateToken,updateCeba);

export default ceba;