import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IRolesRepository } from '@roles/repositories/IRolesRepository';

type deleteRoleParams = {
  id: string;
};

@injectable()
export class DeleteRoleUseCase {
  constructor(
    @inject('RolesRepository') private rolesRepository: IRolesRepository,
  ) {}
  async execute({ id }: deleteRoleParams): Promise<void> {
    const role = await this.rolesRepository.findById(id);

    if (!role) {
      throw new AppError('Role not found', 400);
    }

    await this.rolesRepository.delete(role);
  }
}
