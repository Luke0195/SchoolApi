import { Router } from 'express';

import photoController from '../controllers/PhotoController';
import loginRequired from '../middlewares/loginRequired';

const photoRoutes = Router();

photoRoutes.post('/', loginRequired, photoController.store);
// uploads.single -> vai nos permitir ter acesso a request.file
export default photoRoutes;
