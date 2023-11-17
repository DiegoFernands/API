import { IRolesRepository } from '@roles/repositories/IRolesRepository';
import { RolesRepository } from '@roles/repositories/Role.Repository';
import { CreateRoleController } from '@roles/useCase/createRole/CreateRoleController';
import { DeleteRoleController } from '@roles/useCase/deleteRole/DeleteRoleController';
import { ListRoulesController } from '@roles/useCase/listRoles/ListRoulesController';
import { ShowRoleController } from '@roles/useCase/showRole/ShowRoleController';
import { UpdateRoleController } from '@roles/useCase/updateRole/ShowRoleController';
import { container } from 'tsyringe';

container.registerSingleton<IRolesRepository>(
  'RolesRepository',
  RolesRepository,
);
container.registerSingleton('CreateRoleController', CreateRoleController);
container.registerSingleton('DeleteRoleController', DeleteRoleController);
container.registerSingleton('ListRoulesController', ListRoulesController);
container.registerSingleton('ShowRoleController', ShowRoleController);
container.registerSingleton('UpdateRoleController', UpdateRoleController);
