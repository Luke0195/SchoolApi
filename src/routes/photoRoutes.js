import { Router } from 'express';

import photoController from '../controllers/PhotoController';

const photoRoutes = Router();

photoRoutes.post('/', photoController.store);
// uploads.single -> vai nos permitir ter acesso a request.file
export default photoRoutes;
