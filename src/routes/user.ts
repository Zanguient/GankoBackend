import { Router } from 'express';
import { login, resetPassword, createUser, newPassword } from '../controllers/index';
import { CheckUsuarioByEmail, CheckUsuarioByUser } from '../middlewares/check-usuario';
import { ValidateToken } from '../middlewares/token-validation';

const user: Router = Router();

user.post('/create-user', CheckUsuarioByEmail,CheckUsuarioByUser, createUser);
user.post('/login', login);
user.post('/reset-password', resetPassword);
user.post('/new-password', ValidateToken, newPassword);
export default user;
