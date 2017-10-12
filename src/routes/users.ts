import { Router } from 'express';
import { login,resetPassword } from '../controllers/users/index'

const users: Router = Router();

users.post('/login', login);
users.post('/reset-password/',resetPassword);
export default users;
