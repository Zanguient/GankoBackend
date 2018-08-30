import { Router } from 'express';
import { getFinca, addFinca, deleteFinca, updateFinca} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const finca: Router = Router();

finca.get('/',ValidateToken,getFinca);
finca.post('/',ValidateToken,addFinca);
finca.delete('/:idfinca',ValidateToken,deleteFinca);
finca.put('/:idfinca',ValidateToken,updateFinca);

export default finca;