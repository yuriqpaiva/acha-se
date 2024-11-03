import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../../lib/prisma';

export async function handleFindAllReportsLostItem(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const reportsLostItem = await prisma.reportLostItem.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  return res.send(reportsLostItem);
}
