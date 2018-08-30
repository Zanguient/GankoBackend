import { Router } from 'express';
import { getPajilla, addPajilla, deletePajilla, updatePajilla} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getPajillasyIdFinca } from '../controllers/pajilla/get-pajilla';

const pajilla: Router = Router();

pajilla.get('/:idFinca',ValidateToken,getPajillasyIdFinca);


pajilla.post('/add-pajilla',ValidateToken,addPajilla);
pajilla.delete('/delete-pajilla/:idPajilla',ValidateToken,deletePajilla);
pajilla.put('/update-pajilla/:idPajilla',ValidateToken,updatePajilla);

export default pajilla;