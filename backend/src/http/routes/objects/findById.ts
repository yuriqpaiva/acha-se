import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { BadRequestError } from '../../../presentation/errors/bad-request-error';
import { PrismaObjectsRepository } from '@/repositories/prisma/prisma-objects-repository';
import { R2ImageUploadProvider } from '@/providers/implementations/r2-image-upload';
import { FindObjectByIdUseCase } from '@/use-cases/objects/find-object-by-id-use-case';

export async function handleFindObjectById(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const objectParam = z.object({
    objectId: z.string(),
  });

  const { objectId } = objectParam.parse(req.params);

  const objectsRepository = new PrismaObjectsRepository();
  const imageUploadProvider = new R2ImageUploadProvider();
  const findObjectByIdUseCase = new FindObjectByIdUseCase(
    objectsRepository,
    imageUploadProvider,
  );

  const object = await findObjectByIdUseCase.execute(objectId);

  if (!object) {
    throw new BadRequestError('Objeto inexistente');
  }

  return res.send(object);
}
