import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { Category } from '@prisma/client';
import { FindManyObjectsByCategoryUseCase } from '@/use-cases/objects/find-many-objects-by-category-use-case';
import { PrismaObjectsRepository } from '@/repositories/prisma/prisma-objects-repository';
import { R2ImageUploadProvider } from '@/providers/implementations/r2-image-upload';

export async function handleFindObjectsByCategory(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const paramsValidation = z.object({
    category: z.nativeEnum(Category).optional(),
  });
  const { category } = paramsValidation.parse(req.query);

  const findManyByCategoryUseCase = new FindManyObjectsByCategoryUseCase(
    new PrismaObjectsRepository(),
    new R2ImageUploadProvider(),
  );

  const objects = await findManyByCategoryUseCase.execute(category);

  return res.send(objects);
}
