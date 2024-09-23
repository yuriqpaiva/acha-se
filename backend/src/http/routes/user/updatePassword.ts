import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcryptjs';

const schema = z.object({
  currentPassword: z.string(),
  newPassword: z.string(),
});

export async function updateUserPassword(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const userId = req.headers.userId as string;

  if (!userId) {
    return res.status(401).send({
      message: 'Unauthorized',
    });
  }

  const { currentPassword, newPassword } = schema.parse(req.body);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return res.status(404).send({
      message: 'User not found',
    });
  }

  const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

  if (!isPasswordValid) {
    return res.status(400).send({
      message: 'Invalid password',
    });
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: await bcrypt.hash(newPassword, 8),
    },
  });

  res.status(204);
}
