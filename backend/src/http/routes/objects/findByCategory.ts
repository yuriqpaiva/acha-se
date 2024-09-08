import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../../lib/prisma';
import { z } from 'zod';
import { Category, Objects } from '@prisma/client';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { r2 } from '../../../lib/cloudflare';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function handleFindObjectsByCategory(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const paramsValidation = z.object({
    category: z
      .union([z.nativeEnum(Category).array(), z.nativeEnum(Category)])
      .optional(),
  });
  const { category } = paramsValidation.parse(req.query);

  let objects: Objects[] = [];

  if (category) {
    const categoryFilter =
      typeof category === 'string' ? new Array(category) : category;

    objects = await prisma.objects.findMany({
      where: {
        category: {
          in: categoryFilter,
        },
        devolution: null,
      },
    });
  } else {
    objects = await prisma.objects.findMany({
      where: {
        devolution: null,
      },
    });
  }

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
