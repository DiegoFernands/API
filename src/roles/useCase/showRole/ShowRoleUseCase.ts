import { inject, injectable } from 'tsyringe';
import { Role } from '@roles/entities/Role';
import { AppError } from '@shared/errors/AppError';
import { IRolesRepository } from '@roles/repositories/IRolesRepository';

type showRoleParams = {
  id: string;
};

@injectable()
export class ShowRoleUseCase {
  constructor(
    @inject('RolesRepository') private rolesRepository: IRolesRepository,
  ) {}
  async execute({ id }: showRoleParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id);

    if (!role) {
      throw new AppError('Role not found', 400);
    }

    return role;
  }
}
