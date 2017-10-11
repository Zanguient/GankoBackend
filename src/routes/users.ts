import { Router } from 'express';
import { login } from '../controllers/users/index'

const users: Router = Router();

users.post('/login', login);

export default users;
