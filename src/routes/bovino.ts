import { Router } from 'express';
import { getBovinos, addBovino, deleteBovino, updateBovino } from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const bovino: Router = Router();

bovino.get('/get-bovinos/:idFinca', ValidateToken, getBovinos);
bovino.post('/add-bovino/', ValidateToken, addBovino);
bovino.put('/update-bovino/:idbovino', ValidateToken, updateBovino);
bovino.delete('/delete-bovino/:idbovino', ValidateToken, deleteBovino);

export default bovino;