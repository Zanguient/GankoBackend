import { Router } from 'express';
import { ValidateToken } from '../middlewares/token-validation';
import { getPraderaByIdFarm } from '../controllers/pradera/get-praderas-by-id-farm';
import { getPraderaById } from '../controllers/pradera/get-praderas-by-id';
import { updatePraderaById } from '../controllers/pradera/update-pradera-by-id';
import { getAlertaByIdPradera } from '../controllers/pradera/get-alerta-by-id-pradera';
import { addAlertaByIdPradera } from '../controllers/pradera/add-alerta-by-id-pradera';

const pradera: Router = Router();

pradera.use(ValidateToken);
pradera.get('/:idFinca/:idUser',getPraderaByIdFarm);
pradera.get('/:idPradera/pradera',getPraderaById);
pradera.put('/:idPradera',updatePraderaById);

pradera.get('/:idPradera/alertas',getAlertaByIdPradera);
pradera.post('/alertas',addAlertaByIdPradera);

export default pradera;