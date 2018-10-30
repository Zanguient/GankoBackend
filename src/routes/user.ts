import { Router } from 'express';
import { insert, login } from '../controllers/index';

const user: Router = Router();
user.post('/login', login);
user.post('/',insert);
export default user;