import { Router } from 'express';
import { getFinca} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const finca: Router = Router();

finca.get('/get-fincas',ValidateToken,getFinca);

export default finca;