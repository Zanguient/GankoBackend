import { Router } from 'express';
import { getFinca, addFinca, deleteFinca, updateFinca} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const finca: Router = Router();

finca.get('/get-fincas',ValidateToken,getFinca);
finca.post('/add-finca',ValidateToken,addFinca);
finca.delete('/delete-finca/:idfinca',ValidateToken,deleteFinca);
finca.put('/update-finca/:idfinca',ValidateToken,updateFinca);

export default finca;