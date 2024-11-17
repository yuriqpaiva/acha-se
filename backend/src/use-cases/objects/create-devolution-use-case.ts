import {
  CreateDevolution,
  DevolutionRepository,
} from '@/repositories/devolution-repository';
import { Devolution } from '@prisma/client';

export class CreateDevolutionUseCase {
  constructor(private readonly devolutionRepository: DevolutionRepository) {}

  async execute(devolution: CreateDevolution): Promise<Devolution> {
    return this.devolutionRepository.create(devolution);
  }
}
