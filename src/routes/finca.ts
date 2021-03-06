import { Router } from 'express';
import { getFinca, addFinca, deleteFinca, updateFinca } from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { byId } from '../controllers/common/_index';

const finca: Router = Router();
finca.use(ValidateToken);
finca.get('/',getFinca);
finca.post('/',addFinca);
finca.delete('/:idFinca',deleteFinca);
finca.put('/:idFinca',updateFinca);
finca.get('/:id', byId);


export default finca;