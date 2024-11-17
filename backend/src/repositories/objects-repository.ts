import { type Objects } from '@prisma/client';

export type ObjectWithoutId = Omit<Objects, 'id'>;

export interface ObjectsRepository {
  create(object: Objects): Promise<Objects>;
  update(objectId: string, object: ObjectWithoutId): Promise<Objects>;
  findMany(): Promise<Objects[]>;
  findById(id: string): Promise<Objects | null>;
}
