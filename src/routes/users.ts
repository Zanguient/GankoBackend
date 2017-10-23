import { Router } from 'express';
import { login, resetPassword, getFinca, createUser, getBovinos} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { CheckUsuario } from '../middlewares/check-usuario';

const users: Router = Router();

users.post('/create-user', CheckUsuario ,createUser);
users.post('/login', login);
users.post('/reset-password/',resetPassword);
users.get('/get-fincas/',ValidateToken,getFinca);
users.get('/get-bovinos/:id_finca',ValidateToken,getBovinos);
export default users;
