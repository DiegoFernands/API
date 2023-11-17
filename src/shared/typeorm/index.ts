import { DataSource } from 'typeorm';
import { CreateRolesTable1699290149363 } from './migrations/1699290149363-CreateRolesTable';
import { Role } from '@roles/entities/Role';
import { CreateUsersTable1699569963466 } from './migrations/1699569963466-CreateUsersTable';
import { AddRoleIdUsersTable1699892768980 } from './migrations/1699892768980-AddRoleIdUsersTable';
import { User } from '@users/entities/User';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './bd.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1699290149363,
    CreateUsersTable1699569963466,
    AddRoleIdUsersTable1699892768980,
  ],
});
