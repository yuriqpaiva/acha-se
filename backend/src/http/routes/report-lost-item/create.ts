import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { Category } from '@prisma/client';
import { Upload } from '@aws-sdk/lib-storage';
import { r2 } from '../../../lib/cloudflare';
import { prisma } from '../../../lib/prisma';
import { randomUUID } from 'crypto';
import { SocketStream } from '@fastify/websocket';

export async function handleCreateReportLostItem(
  req: FastifyRequest,
  res: FastifyReply,
  connections: Set<SocketStream>,
) {
  const parts = req.parts();
  let imageKey = '';

  // Schema for validating request body
  const reportItemSchema = z.object({
    category: z.nativeEnum(Category),
    email: z.string().email(),
    brand: z.string(),
    color: z.string(),
    details: z.string().min(10),
    location: z.string(),
    lostTime: z.coerce.date(),
  });

  const body: Record<string, unknown> = {};

  // Iterate over request parts for file and field processing
  for await (const part of parts) {
    if (part.type === 'file') {
      const file = part;
      try {
        const uploadImageToS3 = new Upload({
          client: r2,
          params: {
            Bucket: process.env.R2_BUCKET,
            Key: `${randomUUID()}_${file.filename}`,
            Body: file.file,
            ContentType: file.mimetype,
          },
          leavePartsOnError: true,
        });

        const uploadedImage = await uploadImageToS3.done();
        imageKey = uploadedImage.Key as string;
      } catch (error) {
        console.error('File upload error:', error);
        return res.status(500).send({ message: 'File upload failed' });
      }
    } else {
      body[part.fieldname] = part.value;
    }
  }

  const { category, email, brand, color, details, location, lostTime } =
    reportItemSchema.parse(body);

  const createdReportLostItem = await prisma.reportLostItem.create({
    data: {
      category,
      email,
      brand,
      color,
      details,
      location,
      lostTime,
      imageKey,
    },
  });

  try {
    const message = JSON.stringify(createdReportLostItem);
    for (const connection of connections) {
      connection.socket.send(message);
    }
  } catch (error) {
    console.error('Error sending message to clients:', error);
  }

  return res.status(201).send(createdReportLostItem);
}
