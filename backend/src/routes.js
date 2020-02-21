import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import RecipientsController from './app/controllers/RecipientsController';
import SessionController from './app/controllers/SessionController';
import CouriersController from './app/controllers/CouriersController';
import PackagesController from './app/controllers/PackagesController';
import DeliveryController from './app/controllers/DeliveryController';
import ProblemsController from './app/controllers/ProblemsController';

import authMiddleweare from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleweare);

routes.put('/users', UserController.update);

routes.get('/recipients', RecipientsController.index);
routes.get('/recipients/:id', RecipientsController.show);
routes.post('/recipients', RecipientsController.store);
routes.put('/recipients/', RecipientsController.update);

routes.get('/couriers', CouriersController.index);
routes.get('/couriers/:courierId', CouriersController.show);
routes.post('/couriers', CouriersController.store);
routes.put('/couriers/:courierId', CouriersController.update);
routes.delete('/couriers/:courierId', CouriersController.delete);

routes.post('/packages', PackagesController.store);
routes.put('/packages', PackagesController.update);
routes.get('/packages', PackagesController.index);
routes.delete('/packages', PackagesController.delete);

routes.put('/deliveryman/:deliverymanId/start', DeliveryController.update);
routes.post(
  '/deliveryman/:deliverymanId/finish/:id',
  upload.single('file'),
  DeliveryController.store
);
routes.get('/deliveryman/:deliverymanId/deliveries', DeliveryController.index);
routes.get('/deliveryman/:deliverymanId/delivered', DeliveryController.show);

routes.post('/delivery/:id/problems', ProblemsController.store);
routes.get('/delivery/problems', ProblemsController.index);
routes.get('/delivery/:id/problems', ProblemsController.show);
routes.delete('/delivery/:id/cancel-delivery', ProblemsController.delete);

export default routes;
