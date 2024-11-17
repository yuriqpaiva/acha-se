import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { CreateDevolutionUseCase } from '@/use-cases/objects/create-devolution-use-case';
import { PrismaDevolutionRepository } from '@/repositories/prisma/prisma-devolution-repository';

export async function handleDevolution(req: FastifyRequest, res: FastifyReply) {
  const objectBody = z.object({
    name: z.string(),
    rg: z.string(),
    cpf: z.string(),
    objectId: z.string(),
  });

  const data = objectBody.parse(req.body);

  const createDevolutionUseCase = new CreateDevolutionUseCase(
    new PrismaDevolutionRepository(),
  );

  const devolution = await createDevolutionUseCase.execute(data);

  return res.send(devolution).status(201);
}
