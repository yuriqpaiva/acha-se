import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../../lib/prisma';
import { r2 } from '../../../lib/cloudflare';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function handleFindAllDevolutions(
  _: FastifyRequest,
  res: FastifyReply,
) {
  const devolutions = await prisma.devolution.findMany({
    include: {
      object: true,
    },
  });
  const returnArr = [];
  for await (const devolution of devolutions) {
    const command = new GetObjectCommand({
      Bucket: process.env.R2_BUCKET,
      Key: devolution.object.imageKey!,
    });
    const url = await getSignedUrl(r2, command, { expiresIn: 15 * 60 });

    returnArr.push({
      id: devolution.id,
      name: devolution.name,
      imageUrl: url,
      cpf: devolution.cpf,
      rg: devolution.rg,
      category: devolution.object.category,
      objectName: devolution.object.name,
      devolutionDate: devolution.date,
    });
  }

  return res.send(returnArr);
}
