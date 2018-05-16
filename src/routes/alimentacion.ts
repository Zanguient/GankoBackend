import { Router } from 'express';
import { getAlimentacion, addAlimentacion, deleteAlimentacion, updateAlimentacion} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const alimentacion: Router = Router();

alimentacion.get('/get-alimentacion',ValidateToken,getAlimentacion);
alimentacion.post('/add-alimentacion',ValidateToken,addAlimentacion);
alimentacion.delete('/delete-alimentacion/:idAlimentacion',ValidateToken,deleteAlimentacion);
alimentacion.put('/update-alimentacion/:idAlimentacion',ValidateToken,updateAlimentacion);

export default alimentacion;