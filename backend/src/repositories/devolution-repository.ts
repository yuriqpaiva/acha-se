import { type Devolution } from '@prisma/client';

export type CreateDevolution = Omit<Devolution, 'id' | 'date'>;

export interface DevolutionRepository {
  create(devolution: CreateDevolution): Promise<Devolution>;
}
