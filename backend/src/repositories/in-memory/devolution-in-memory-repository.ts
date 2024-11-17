import { randomUUID } from 'crypto';
import { DevolutionRepository } from '../devolution-repository';
import { type Devolution } from '@prisma/client';

export class DevolutionInMemoryRepository implements DevolutionRepository {
  public devolutions: Devolution[] = [];

  async create(devolution: Devolution): Promise<Devolution> {
    const newDevolution = {
      ...devolution,
      id: randomUUID(),
      date: new Date(),
    };

    this.devolutions.push(newDevolution);
    return newDevolution;
  }
}
