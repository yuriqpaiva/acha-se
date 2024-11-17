import { type Objects } from '@prisma/client';
import { ObjectsRepository } from '../objects-repository';

export class ObjectsInMemoryRepository implements ObjectsRepository {
  private objects: Objects[];

  constructor() {
    this.objects = [];
  }

  async create(object: Objects): Promise<Objects> {
    this.objects.push(object);
    return object;
  }

  async findMany(): Promise<Objects[]> {
    return this.objects;
  }

  async findById(id: string): Promise<Objects | null> {
    return this.objects.find((object) => object.id === id) || null;
  }
}
