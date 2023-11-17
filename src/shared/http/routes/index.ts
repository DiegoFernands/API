import { Router } from 'express';
import { rolesRoute } from '@roles/http/routes/roles.routes';
import { userRouter } from '@users/http/users.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Olá Dev' });
});

routes.use('/roles', rolesRoute);
routes.use('/users', userRouter);

export { routes };
