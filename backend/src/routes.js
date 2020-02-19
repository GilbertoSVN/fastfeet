import { Router } from 'express';

import UserController from './app/controllers/UserController';
import RecipientsController from './app/controllers/RecipientsController';
import SessionController from './app/controllers/SessionController';

import authMiddleweare from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleweare);

routes.put('/users', UserController.update);

routes.get('/recipients', RecipientsController.index);
routes.get('/recipients/:id', RecipientsController.show);
routes.post('/recipients', RecipientsController.store);
routes.put('/recipients/', RecipientsController.update);
export default routes;
