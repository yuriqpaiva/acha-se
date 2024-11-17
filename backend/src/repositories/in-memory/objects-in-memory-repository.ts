import { type Objects, Category } from '@prisma/client';
import { ObjectsRepository, ObjectWithoutId } from '../objects-repository';

export class ObjectsInMemoryRepository implements ObjectsRepository {
  private objects: Objects[];

  constructor() {
    this.objects = [];
  }

  async create(object: Objects): Promise<Objects> {
    this.objects.push(object);
    return object;
  }

  async update(objectId: string, object: ObjectWithoutId): Promise<Objects> {
    const objectIndex = this.objects.findIndex(
      (object) => object.id === objectId,
    );

    if (objectIndex === -1) {
      throw new Error('Object not found');
    }

    const result = { ...this.objects[objectIndex], ...object };

    this.objects[objectIndex] = result;

    return result;
  }

  async findMany(): Promise<Objects[]> {
    return this.objects;
  }

  async findManyByCategory(category?: Category): Promise<Objects[]> {
    if (!category) return this.objects;
    return this.objects.filter((object) => object.category === category);
  }

  async findById(id: string): Promise<Objects | null> {
    return this.objects.find((object) => object.id === id) || null;
  }
}
