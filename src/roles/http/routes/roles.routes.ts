import { container } from 'tsyringe';
import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { CreateRoleController } from '@roles/useCase/createRole/CreateRoleController';
import { ListRoulesController } from '@roles/useCase/listRoles/ListRoulesController';
import { ShowRoleController } from '@roles/useCase/showRole/ShowRoleController';
import { UpdateRoleController } from '@roles/useCase/updateRole/ShowRoleController';
import { DeleteRoleController } from '@roles/useCase/deleteRole/DeleteRoleController';

const rolesRoute = Router();
const createRolesController = container.resolve(CreateRoleController);
const listRoulesController = container.resolve(ListRoulesController);
const showRoleController = container.resolve(ShowRoleController);
const updateRoleController = container.resolve(UpdateRoleController);
const deleteRoleController = container.resolve(DeleteRoleController);

rolesRoute.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (req, res) => {
    return createRolesController.handle(req, res);
  },
);

rolesRoute.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (req, res) => {
    return listRoulesController.handle(req, res);
  },
);

rolesRoute.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (req, res) => {
    return showRoleController.handle(req, res);
  },
);

rolesRoute.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (req, res) => {
    return updateRoleController.handle(req, res);
  },
);

rolesRoute.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (req, res) => {
    return deleteRoleController.handle(req, res);
  },
);

export { rolesRoute };
