import { FastifyReply, FastifyRequest } from 'fastify';
import { FindManyObjectsUseCase } from '../../../use-cases/objects/find-many-objects-use-case';
import { PrismaObjectsRepository } from '../../../repositories/prisma/prisma-objects-repository';
import { R2ImageUploadProvider } from '../../../providers/implementations/r2-image-upload';

export async function handleFindAllObjects(
  _: FastifyRequest,
  res: FastifyReply,
) {
  const objectsRepository = new PrismaObjectsRepository();
  const imageUploadProvider = new R2ImageUploadProvider();
  const findManyObjectsUseCase = new FindManyObjectsUseCase(
    objectsRepository,
    imageUploadProvider,
  );

  const objects = await findManyObjectsUseCase.execute();
  return res.send(objects);
}
