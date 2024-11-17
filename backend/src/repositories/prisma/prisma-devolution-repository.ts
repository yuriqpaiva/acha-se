import { Devolution } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import {
  CreateDevolution,
  DevolutionRepository,
} from '../devolution-repository';

export class PrismaDevolutionRepository implements DevolutionRepository {
  async create(devolution: CreateDevolution): Promise<Devolution> {
    const createdDevolution = await prisma.devolution.create({
      data: devolution,
    });

    return createdDevolution;
  }
}
