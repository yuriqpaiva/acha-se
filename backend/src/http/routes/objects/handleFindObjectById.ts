import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../../lib/prisma';
import { r2 } from '../../../lib/cloudflare';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { z } from 'zod';
import { BadRequestError } from '../../../presentation/errors/bad-request-error';

export async function handleFindObjectById(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const objectParam = z.object({
    objectId: z.string(),
  });

  const { objectId } = objectParam.parse(req.params);
  const object = await prisma.objects.findUnique({ where: { id: objectId } });

  if (!object) {
    return new BadRequestError('Objeto inexistente');
  }

  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET,
    Key: object.imageKey!,
  });
  const url = await getSignedUrl(r2, command, { expiresIn: 15 * 60 });

  return res.send({
    ...object,
    imageUrl: url,
  });
}
