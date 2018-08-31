import { Router } from 'express';
import { getFinca, addFinca, deleteFinca, updateFinca} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const finca: Router = Router();
finca.use(ValidateToken);
finca.get('/',getFinca);
finca.post('/',addFinca);
finca.delete('/:idfinca',deleteFinca);
finca.put('/:idfinca',updateFinca);

export default finca;