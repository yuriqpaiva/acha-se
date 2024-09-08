import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../../lib/prisma';
import { z } from 'zod';

export async function handleDevolution(req: FastifyRequest, res: FastifyReply) {
  const objectBody = z.object({
    name: z.string(),
    rg: z.string(),
    cpf: z.string(),
    objectId: z.string(),
  });

  const { cpf, name, rg, objectId } = objectBody.parse(req.body);

  const devolution = await prisma.devolution.create({
    data: {
      cpf,
      name,
      rg,
      objectId,
    },
  });

  return res.send(devolution).status(201);
}
