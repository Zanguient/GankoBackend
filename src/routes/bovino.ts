import { Router } from 'express';
import { getBovinos, addBovino, deleteBovino, updateBovino, getBovino } from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getAlimentacionByIdBovino } from '../controllers/bovinos/get-alimentacion-by-id-bovino';
import { getSanidadByIdBovino } from '../controllers/bovinos/get-sanidad-by-id-bovino';
import { getManejoByIdBovino } from '../controllers/bovinos/get-manejo-by-id-bovino';
import { getCebaByIdBovino } from '../controllers/bovinos/get-ceba-by-id-bovino';
import { deleteCebaByIdBovinoAndCeba } from '../controllers/bovinos/delete-ceba-by-id-bovino-and-ceba';

const bovino: Router = Router();

bovino.get('/:idFinca', ValidateToken, getBovinos);


bovino.post('/', ValidateToken, addBovino);
bovino.delete('/:idBovino', ValidateToken, deleteBovino);
bovino.get('/:idBovino', ValidateToken, getBovino);
bovino.get('/:idBovino/alimentacion',ValidateToken,getAlimentacionByIdBovino);
bovino.get('/:idBovino/sanidad',ValidateToken,getSanidadByIdBovino);
bovino.get("/:idBovino/manejo",ValidateToken,getManejoByIdBovino);
bovino.get("/:idBovino/ceba",ValidateToken,getCebaByIdBovino);
bovino.delete("/:idBovino/ceba/:idCeba",ValidateToken,deleteCebaByIdBovinoAndCeba);
bovino.post("/:idBovino/ceba",ValidateToken,addCebaByIdBovino);


bovino.put('/update-bovino/:idBovino', ValidateToken, updateBovino);

export default bovino;