import { Category, type Objects } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { ObjectsRepository, ObjectWithoutId } from '../objects-repository';

export class PrismaObjectsRepository implements ObjectsRepository {
  async create(object: Objects): Promise<Objects> {
    const createdObject = await prisma.objects.create({
      data: object,
    });

    return createdObject;
  }

  async update(objectId: string, object: ObjectWithoutId): Promise<Objects> {
    const updatedObject = await prisma.objects.update({
      where: {
        id: objectId,
      },
      data: object,
    });

    return updatedObject;
  }

  async findMany(): Promise<Objects[]> {
    const objects = await prisma.objects.findMany();
    return objects;
  }

  async findManyByCategory(category?: Category): Promise<Objects[]> {
    const objects = await prisma.objects.findMany({
      where: category
        ? {
            category,
          }
        : undefined,
    });

    return objects;
  }

  async findById(id: string): Promise<Objects | null> {
    const object = await prisma.objects.findUnique({
      where: {
        id,
      },
    });

    return object;
  }
}
