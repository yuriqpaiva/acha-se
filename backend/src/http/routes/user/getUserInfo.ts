import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../../lib/prisma';

export async function getUserInfo(req: FastifyRequest, res: FastifyReply) {
  const userId = req.headers.userId as string;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    res.status(400);
    return;
  }

  res.send({
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
  });
}
