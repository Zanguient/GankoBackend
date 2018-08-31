import { Router } from 'express';
import { getBovinos, addBovino, deleteBovino, updateBovino, getBovino } from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { getAlimentacionByIdBovino } from '../controllers/bovinos/get-alimentacion-by-id-bovino';
import { getSanidadByIdBovino } from '../controllers/bovinos/get-sanidad-by-id-bovino';
import { getManejoByIdBovino } from '../controllers/bovinos/get-manejo-by-id-bovino';
import { getCebaByIdBovino } from '../controllers/bovinos/get-ceba-by-id-bovino';
import { deleteCebaByIdBovinoAndCeba } from '../controllers/bovinos/delete-ceba-by-id-bovino-and-ceba';
import { addCebaByIdBovino } from '../controllers/bovinos/add-ceba-by-id-bovino';
import { getMilkByIdBovino } from '../controllers/bovinos/get-milk-by-id-bovino';
import { addMilkByIdBovino } from '../controllers/bovinos/add-milk-by-id-bovino';
import { getVacunaByIdBovino } from '../controllers/bovinos/get-vacuna-by-id-bovino';

const bovino: Router = Router();

bovino.use(ValidateToken);
bovino.delete('/:idBovino', deleteBovino);
bovino.post('/', addBovino);
bovino.get('/:idBovino', getBovino);
bovino.get('/:idBovino/alimentacion', getAlimentacionByIdBovino);
bovino.get('/:idBovino/sanidad', getSanidadByIdBovino);
bovino.get("/:idBovino/manejo", getManejoByIdBovino);
bovino.get("/:idBovino/ceba", getCebaByIdBovino);
bovino.delete("/:idBovino/ceba/:idCeba", deleteCebaByIdBovinoAndCeba);
bovino.post("/:idBovino/ceba", addCebaByIdBovino);
bovino.put("/:idBovino/destete", updateBovino);
bovino.get("/:idBovino/leche", getMilkByIdBovino);
bovino.post("/:idBovino/leche", addMilkByIdBovino)
bovino.put("/:idBovino/celo", updateBovino);
bovino.put("/:idBovino/servicio", updateBovino);
bovino.put("/:idBovino/diagnostico", updateBovino);
bovino.put("/:idBovino/novedad", updateBovino);
bovino.put("/:idBovino/parto", updateBovino);
bovino.get("/:idBovino/vacunas", getVacunaByIdBovino);
bovino.get('/finca/:idFinca', getBovinos);


export default bovino;