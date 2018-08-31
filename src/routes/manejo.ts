import { Router } from 'express';
import { getManejo, addManejo, deleteManejo, updateManejo} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getManejoById } from '../controllers/manejo/get-manejo';

const manejo: Router = Router();

manejo.get('/:idManejo',getManejoById);
manejo.post('/',addManejo);


export default manejo;