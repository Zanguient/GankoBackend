import { Router } from 'express';
import { getManejo, addManejo, deleteManejo, updateManejo} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getManejoById } from '../controllers/manejo/get-manejo';
import { getManejoByParam } from '../controllers/manejo/get-manejo-by-param';

const manejo: Router = Router();

manejo.use(ValidateToken);
manejo.get('/:idManejo',getManejoById);
manejo.post('/',addManejo);
manejo.get('/finca/:idFinca',getManejoByParam);


export default manejo;