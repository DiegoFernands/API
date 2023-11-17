import { Role } from '@roles/entities/Role';
import { IRolesRepository } from '@roles/repositories/IRolesRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

type CreatRoleDTO = {
  name: string;
};

@injectable()
export class CreateRoleUseCase {
  constructor(
    @inject('RolesRepository') private rolesRepository: IRolesRepository,
  ) {}
  async execute({ name }: CreatRoleDTO): Promise<Role> {
    const rolesAlreadyExists = await this.rolesRepository.findByName(name);

    if (rolesAlreadyExists) {
      throw new AppError('Role already exists');
    }

    return this.rolesRepository.create({ name });
  }
}
