// src/modules/users/Routes.ts
import { composeRouter } from 'gaman/compose'; 
import * as UserController from './Controllers';

const UserRouter = composeRouter((router: any) => {
  router.get('/users', UserController.index);
  router.post('/users', UserController.store);
});

export default UserRouter;