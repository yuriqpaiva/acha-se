import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../../lib/prisma';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { r2 } from '../../../lib/cloudflare';

export async function handleFindAllReportsLostItem(
  _: FastifyRequest,
  res: FastifyReply,
) {
  const reportsLostItem = await prisma.reportLostItem.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedLostItems = await Promise.all(
    reportsLostItem.map(async (lostItem) => {
      let url = null;

      if (lostItem.imageKey) {
        const command = new GetObjectCommand({
          Bucket: process.env.R2_BUCKET,
          Key: lostItem.imageKey,
        });
        url = await getSignedUrl(r2, command, { expiresIn: 15 * 60 });
      }

      return {
        id: lostItem.id,
        category: lostItem.category,
        email: lostItem.email,
        brand: lostItem.brand,
        color: lostItem.color,
        createdAt: lostItem.createdAt,
        details: lostItem.details,
        imageKey: lostItem.imageKey,
        location: lostItem.location,
        lostTime: lostItem.lostTime,
        imageUrl: url,
      };
    }),
  );

  return res.send(formattedLostItems);
}
