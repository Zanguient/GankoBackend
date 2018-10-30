import { Router } from 'express';
import { addManejo } from '../controllers/index';
import { getManejoById } from '../controllers/manejo/get-manejo';
import { getManejoByParam } from '../controllers/manejo/get-manejo-by-param';
import { ValidateToken } from '../middlewares/token-validation';

const manejo: Router = Router();

manejo.use(ValidateToken);
manejo.get('/:idManejo',getManejoById);
manejo.post('/',addManejo);
manejo.get('/finca/:idFinca',getManejoByParam);


export default manejo;