import { type Objects } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { ObjectsRepository } from '../objects-repository';

export class PrismaObjectsRepository implements ObjectsRepository {
  async create(object: Objects): Promise<Objects> {
    const createdObject = await prisma.objects.create({
      data: object,
    });

    return createdObject;
  }

  async findMany(): Promise<Objects[]> {
    const objects = await prisma.objects.findMany();
    return objects;
  }
}
