import { Router } from 'express';
import { ValidateToken } from '../middlewares/token-validation';
import { getReportes } from '../controllers/reportes/reportes';

const reportes: Router = Router();
reportes.use(ValidateToken);
reportes.get('/:idReporte',ValidateToken, getReportes);

export default reportes;