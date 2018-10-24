import { Router } from 'express';
import { getAlimentacion, addAlimentacion, deleteAlimentacion, updateAlimentacion} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getAlimentacionById } from '../controllers/alimentacion/get-alimentacion';
import { getAlimentacionByIdFinca } from '../controllers/alimentacion/get-alimentacion-by-id-finca';

const alimentacion: Router = Router();

alimentacion.use(ValidateToken);
alimentacion.get('/:idAlimentacion',getAlimentacionById);
alimentacion.get('/finca/:idFinca',getAlimentacionByIdFinca);
alimentacion.post('/',addAlimentacion);


export default alimentacion;