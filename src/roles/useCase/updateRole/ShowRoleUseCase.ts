import { inject, injectable } from 'tsyringe';
import { Role } from '@roles/entities/Role';
import { AppError } from '@shared/errors/AppError';
import { IRolesRepository } from '@roles/repositories/IRolesRepository';

type updateRoleDTO = {
  id: string;
  name: string;
};

@injectable()
export class UpdateRoleUseCase {
  constructor(
    @inject('RolesRepository') private rolesRepository: IRolesRepository,
  ) {}
  async execute({ id, name }: updateRoleDTO): Promise<Role> {
    const role = await this.rolesRepository.findById(id);

    if (!role) {
      throw new AppError('Role not found', 400);
    }

    const roleWithSameName = await this.rolesRepository.findByName(name);

    if (roleWithSameName && role.name !== roleWithSameName.name) {
      throw new AppError('Role name not informed or already or in use');
    }

    role.name = name;

    return this.rolesRepository.save(role);
  }
}
