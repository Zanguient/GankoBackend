import { Router } from 'express';
import { getVenta, addVenta, deleteVenta, updateVenta} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const venta: Router = Router();

venta.get('/get-venta',ValidateToken,getVenta);
venta.post('/add-venta',ValidateToken,addVenta);
venta.delete('/delete-venta/:idVenta',ValidateToken,deleteVenta);
venta.put('/update-venta/:idVenta',ValidateToken,updateVenta);

export default venta;