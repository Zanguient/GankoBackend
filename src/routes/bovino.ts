import { Router } from 'express';
import { getBovinos, addBovino, deleteBovino, updateBovino, addImageBovino, getImageBovino } from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { upload } from './../controllers/bovinos/add-image-bovino'

const bovino: Router = Router();

bovino.get('/get-bovinos/:idfinca', ValidateToken, getBovinos);
bovino.post('/add-bovino/', ValidateToken, addBovino);
bovino.post('/add-bovino/:idbovino/set-image',upload.single('bovino'),addImageBovino)
bovino.get('/get-bovino-image/:idbovino',getImageBovino)
bovino.put('/update-bovino/:idbovino', ValidateToken, updateBovino);
bovino.delete('/delete-bovino/:idbovino', ValidateToken, deleteBovino);

export default bovino;