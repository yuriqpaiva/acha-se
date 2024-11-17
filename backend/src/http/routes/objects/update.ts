import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { Category } from '@prisma/client';
import { R2ImageUploadProvider } from '../../../providers/implementations/r2-image-upload';
import { UpdateObjectUseCase } from '../../../use-cases/objects/update-object-use-case';
import { PrismaObjectsRepository } from '../../../repositories/prisma/prisma-objects-repository';

export async function handleUpdateObject(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { id } = req.params as { id: string };
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

    const data = objectBody.parse(formData);

    const updateObjectUseCase = new UpdateObjectUseCase(
      new PrismaObjectsRepository(),
      new R2ImageUploadProvider(),
    );

    const updatedObject = await updateObjectUseCase.execute(id, {
      ...data,
      devolutionId: null,
      image:
        imageFile && imageFilename
          ? {
              file: imageFile,
              filename: imageFilename,
            }
          : undefined,
    });

    return res.send(updatedObject);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .send({ message: 'Validation error', errors: error.issues });
    }

    return res.status(500).send({ message: 'Internal server error' });
  }
}
