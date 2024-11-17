import { type Objects } from '@prisma/client';
import { ObjectsRepository } from '../../repositories/objects-repository';
import { ImageUploadProvider, UploadInput } from '../../providers/image-upload';

interface UpdateObjectRequest extends Omit<Objects, 'imageKey' | 'id'> {
  image?: UploadInput;
}

export class UpdateObjectUseCase {
  constructor(
    private objectsRepository: ObjectsRepository,
    private imageUploadProvider: ImageUploadProvider,
  ) {}

  async execute(id: string, data: UpdateObjectRequest): Promise<Objects> {
    const object = await this.objectsRepository.findById(id);

    if (!object) {
      throw new Error('Object not found');
    }

    let imageKey = object.imageKey;

    if (data.image) {
      imageKey = await this.imageUploadProvider.upload(data.image);
    }

    const formattedData = { ...data, image: undefined };

    const result = await this.objectsRepository.update(id, {
      ...formattedData,
      imageKey,
    });

    return {
      ...result,
      imageKey,
    };
  }
}
