import { Router } from 'express';
import { login, resetPassword, getFinca } from '../controllers/users/index'

const users: Router = Router();

users.post('/login', login);
users.post('/reset-password/', resetPassword);
users.post('/get-fincas', getFinca);
export default users;
