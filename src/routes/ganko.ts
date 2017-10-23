import { Router } from 'express';
import { login, resetPassword, getFinca, createUser, getBovinos} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { CheckUsuario } from '../middlewares/check-usuario';

const ganko: Router = Router();

ganko.post('/create-user', CheckUsuario ,createUser);
ganko.post('/login', login);
ganko.post('/reset-password/',resetPassword);
ganko.get('/get-fincas/',ValidateToken,getFinca);
ganko.get('/get-bovinos/:id_finca',ValidateToken,getBovinos);
export default ganko;
