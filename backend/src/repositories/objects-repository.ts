import { type Objects } from '@prisma/client';

export interface ObjectsRepository {
  create(object: Objects): Promise<Objects>;
  findMany(): Promise<Objects[]>;
}
