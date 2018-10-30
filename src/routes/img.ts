import { Router } from 'express';
import { getImg } from '../controllers/common/get-img';
import { uploadImage } from '../controllers/common/upload-img';

const img: Router = Router();

img.get('/:digest', getImg);
img.post('/:id', uploadImage)

export default img;