import { Router } from 'express';
import { ValidateToken } from '../middlewares/token-validation';
import { getMovimientoByIdFinca } from '../controllers/movimiento/get-movimiento-by-id-farm';
const movimiento: Router = Router();

movimiento.use(ValidateToken);
movimiento.get('/:idFinca',getMovimientoByIdFinca);
movimiento.post('/',addMovimiento)


export default movimiento;