import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { Category } from '@prisma/client';
import { Upload } from '@aws-sdk/lib-storage';
import { r2 } from '../../../lib/cloudflare';
import { prisma } from '../../../lib/prisma';
import { randomUUID } from 'crypto';

export async function handleUpdateObject(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { id } = req.params as { id: string };
  const parts = req.parts();
  let hasFile = false;

  const objectBody = z.object({
    name: z.string(),
    color: z.string(),
    value: z.string(),
    brand: z.string(),
    date: z.coerce.date(),
    local: z.string(),
    category: z.nativeEnum(Category),
  });

  const body: Record<string, unknown> = {};
  let imageKey = '';

  for await (const part of parts) {
    if (part.type === 'file') {
      hasFile = true;
      const file = part;
      const uploadImageToS3 = new Upload({
        client: r2,
        leavePartsOnError: false,
        params: {
          Bucket: process.env.R2_BUCKET,
          Key: randomUUID().concat(file?.filename),
          Body: file?.file,
          ContentType: 'image/png',
        },
      });

      const uploadedImage = await uploadImageToS3.done();
      imageKey = uploadedImage.Key as string;
    } else {
      body[part.fieldname] = part.value;
    }
  }

  if (!hasFile && !body['imageKey']) {
    return res.status(400).send({
      message: 'Image missing',
    });
  }

  const { brand, category, color, date, local, name, value } =
    objectBody.parse(body);

  const existingObject = await prisma.objects.findUnique({ where: { id } });

  if (!existingObject) {
    return res.status(404).send({
      message: 'Object not found',
    });
  }

  const updatedObject = await prisma.objects.update({
    where: { id },
    data: {
      brand,
      category,
      color,
      date,
      local,
      name,
      value,
      imageKey: imageKey || existingObject.imageKey, // Keep existing image if no new image provided
    },
  });

  return res.send(updatedObject);
}
