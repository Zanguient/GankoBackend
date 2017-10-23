import { Router } from 'express';
import { getBovinos } from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const bovino: Router = Router();

bovino.get('/get-bovinos/:idfinca', ValidateToken, getBovinos);

export default bovino;