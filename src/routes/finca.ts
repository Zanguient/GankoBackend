import { Router } from 'express';
import { getFinca, addFinca, deleteFinca, updateFinca } from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { byId } from '../controllers/common/_index';

const finca: Router = Router();

finca.get('/', ValidateToken, getFinca);
finca.get('/:id', ValidateToken, byId);
finca.post('/', ValidateToken, addFinca);
finca.delete('/:idfinca', ValidateToken, deleteFinca);
finca.put('/:idfinca', ValidateToken, updateFinca);

export default finca;