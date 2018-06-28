import { Router } from 'express';
import { login, resetPassword, insert, newPassword } from '../controllers/index';
import { ValidateToken } from '../middlewares/token-validation';

const user: Router = Router();

user.post('/insert', insert);
user.post('/login', login);
user.put('/reset-password', resetPassword);
user.put('/new-password/:id', ValidateToken, newPassword);
export default user;