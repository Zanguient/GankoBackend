import { Router } from 'express';
import { getFinca, addFinca, deleteFinca} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const finca: Router = Router();

finca.get('/get-fincas',ValidateToken,getFinca);
finca.post('/add-finca',ValidateToken,addFinca);
finca.delete('/delete-finca/:idfinca',ValidateToken,deleteFinca);

export default finca;