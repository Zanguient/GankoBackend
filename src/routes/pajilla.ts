import { Router } from 'express';
import { addPajilla, deletePajilla, updatePajilla} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getPajillasyIdFinca } from '../controllers/pajilla/get-pajilla';

const pajilla: Router = Router();
ValidateToken;

pajilla.get('/:idFinca',getPajillasyIdFinca);

pajilla.post('/',addPajilla);
pajilla.put('/:idPajilla',updatePajilla);

export default pajilla;