import { Router } from 'express';
import { login, resetPassword,createUser} from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';
import { CheckUsuario } from '../middlewares/check-usuario';

const user: Router = Router();

user.post('/create-user', CheckUsuario ,createUser);
user.post('/login', login);
user.post('/reset-password/',resetPassword);
export default user;
