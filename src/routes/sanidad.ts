import { Router } from 'express';
import { getSanidad, addSanidad, deleteSanidad, updateSanidad} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getSanidadById } from '../controllers/sanidad/get-sanidad';
import { getSanidadByParam } from '../controllers/sanidad/get-sanidad-by-param';

const sanidad: Router = Router();
sanidad.use(ValidateToken);
sanidad.get('/:idSanidad',getSanidadById);
sanidad.post('/',addSanidad);
sanidad.get('/finca/:idFinca',getSanidadByParam);

export default sanidad;