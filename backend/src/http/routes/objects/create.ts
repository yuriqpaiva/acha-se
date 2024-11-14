import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { Category } from '@prisma/client';
import { R2ImageUploadProvider } from '../../../providers/implementations/r2-image-upload';
import { CreateObjectUseCase } from '../../../use-cases/objects/create-object-use-case';
import { PrismaObjectsRepository } from '../../../repositories/prisma/prisma-objects-repository';

export async function handleCreateObject(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const objectBody = z.object({
    name: z.string(),
    color: z.string(),
    value: z.string(),
    brand: z.string(),
    date: z.coerce.date(),
    local: z.string(),
    category: z.nativeEnum(Category),
  });

  try {
    const parts = req.parts();
    const formData: Record<string, string> = {};
    let imageFile: Buffer | null = null;
    let imageFilename: string = '';

    for await (const part of parts) {
      if (part.type === 'file') {
        const buffer = await part.toBuffer();
        imageFile = buffer;
        imageFilename = part.filename;
      } else {
        formData[part.fieldname] = part.value as string;
      }
    }

    if (Object.keys(formData).length === 0) {
      return res.status(400).send({
        message: 'No data provided',
      });
    }

    if (!imageFile) {
      return res.status(400).send({
        message: 'Invalid image file',
      });
    }

    const data = objectBody.parse(formData);

    const createObjectUseCase = new CreateObjectUseCase(
      new PrismaObjectsRepository(),
      new R2ImageUploadProvider(),
    );

    const createdObject = await createObjectUseCase.execute({
      ...data,
      devolutionId: null,
      image: {
        file: imageFile,
        filename: imageFilename,
      },
    });

    return res.send(createdObject);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .send({ message: 'Validation error', errors: error.issues });
    }

    return res.status(500).send({ message: 'Internal server error' });
  }
}
