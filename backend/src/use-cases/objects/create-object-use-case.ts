import { type Objects } from '@prisma/client';
import { ObjectsRepository } from '../../repositories/objects-repository';
import { ImageUploadProvider, UploadInput } from '../../providers/image-upload';
import { randomUUID } from 'crypto';

interface CreateObjectRequest extends Omit<Objects, 'id' | 'imageKey'> {
  image: UploadInput;
}

export class CreateObjectUseCase {
  constructor(
    private objectsRepository: ObjectsRepository,
    private imageUploadProvider: ImageUploadProvider,
  ) {}

  async execute(data: CreateObjectRequest): Promise<Objects> {
    const imageKey = await this.imageUploadProvider.upload(data.image);

    const formattedData = { ...data, image: undefined };

    const object = await this.objectsRepository.create({
      id: randomUUID(),
      ...formattedData,
      imageKey,
    });

    return object;
  }
}
