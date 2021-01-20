import { Router } from 'express';
import multer from 'multer';
import photoController from '../controllers/PhotoController';
import multerConfig from '../config/multerConfig';

const uploads = multer(multerConfig);
const photoRoutes = Router();

photoRoutes.post('/', uploads.single('photo_aluno'), photoController.store);
// uploads.single -> vai nos permitir ter acesso a request.file
export default photoRoutes;
