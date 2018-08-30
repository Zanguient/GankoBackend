import { Router } from 'express';
import { ValidateToken } from '../middlewares/token-validation';
import { getGroupByIdFinca } from '../controllers/grupos/get-group-by-id-finca';
import { deleteGroupById } from '../controllers/grupos/delete-group-by-id';
import { addGroup } from '../controllers/grupos/add-group';
import { updateGroup } from '../controllers/grupos/update-group-by-id';
import { getGroupById } from '../controllers/grupos/get-group-by-id';

const grupo: Router = Router();

ValidateToken;
grupo.get('/finca/:idFinca',getGroupByIdFinca);
grupo.delete('/:idGrupo',deleteGroupById);
grupo.post("/",addGroup);
grupo.put("/:idGrupo",updateGroup);
grupo.get("/:idGrupo",getGroupById);


export default grupo;