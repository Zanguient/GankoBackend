import { Router } from 'express';
import { login, resetPassword, getFinca, createUser} from '../controllers/index'
import { ValidateToken } from '../middlewares/token-validation'
import { CheckUsuario } from '../middlewares/check-usuario'

const users: Router = Router();

users.post('/create-user', CheckUsuario ,createUser);
users.post('/login', login);
users.post('/reset-password/', resetPassword);
users.post('/get-fincas',ValidateToken,getFinca);
export default users;
