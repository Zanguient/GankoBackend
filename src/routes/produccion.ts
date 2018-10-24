import { Router } from 'express';
import { getProduccion, addProduccion, deleteProduccion, updateProduccion} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const produccion: Router = Router();

produccion.get('/get-produccion',ValidateToken,getProduccion);
produccion.post('/add-produccion',ValidateToken,addProduccion);
produccion.delete('/delete-produccion/:idProduccion',ValidateToken,deleteProduccion);
produccion.put('/update-produccion/:idProduccion',ValidateToken,updateProduccion);

export default produccion;