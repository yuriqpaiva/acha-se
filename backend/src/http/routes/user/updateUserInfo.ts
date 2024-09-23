import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { prisma } from '../../../lib/prisma';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
});

export async function updateUserInfo(req: FastifyRequest, res: FastifyReply) {
  const userId = req.headers.userId as string;

  if (!userId) {
    return res.status(401).send({
      message: 'Unauthorized',
    });
  }

  const { name, email, phoneNumber } = schema.parse(req.body);

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
      email,
      phoneNumber,
    },
  });

  res.status(204).send({
    message: 'User info updated',
  });
}
