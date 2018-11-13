import { Router } from 'express';
import { addSanidad, updateSanidad } from '../controllers/index';
import { getSanidadById } from '../controllers/sanidad/get-sanidad';
import { getSanidadByParam } from '../controllers/sanidad/get-sanidad-by-param';
import { ValidateToken } from '../middlewares/token-validation';

const sanidad: Router = Router();
sanidad.use(ValidateToken);
sanidad.get('/:idSanidad',getSanidadById);
sanidad.post('/',addSanidad);
sanidad.get('/finca/:idFinca',getSanidadByParam);
sanidad.put('/:idSanidad', updateSanidad);

export default sanidad;