import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../../lib/prisma';
import { r2 } from '../../../lib/cloudflare';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function handleFindAllObjects(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const objects = await prisma.objects.findMany();
  const returnArr = [];
  for await (const obj of objects) {
    const command = new GetObjectCommand({
      Bucket: process.env.R2_BUCKET,
      Key: obj.imageKey!,
    });
    const url = await getSignedUrl(r2, command, { expiresIn: 15 * 60 });

    returnArr.push({
      id: obj.id,
      imageUrl: url,
      brand: obj.brand,
      category: obj.category,
      color: obj.color,
      date: obj.date,
      local: obj.local,
      name: obj.name,
      value: obj.value,
    });
  }

  return res.send(returnArr);
}
