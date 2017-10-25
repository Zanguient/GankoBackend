import { Router } from 'express';
import { getFinca, addFinca} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const finca: Router = Router();

finca.get('/get-fincas',ValidateToken,getFinca);
finca.post('/add-finca',ValidateToken,addFinca);

export default finca;