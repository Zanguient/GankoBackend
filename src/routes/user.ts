import { Router } from 'express';
import { login, resetPassword, insert, newPassword } from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const user: Router = Router();
user.post('/login', login);
user.post('/',insert);
export default user;