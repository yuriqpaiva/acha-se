import { Objects } from '@prisma/client';
import { ObjectsRepository } from '@/repositories/objects-repository';
import { ImageUploadProvider } from '@/providers/image-upload';

type ObjectWithImageUrl = Omit<Objects, 'imageKey'> & {
  imageUrl: string | null;
};

export class FindObjectByIdUseCase {
  constructor(
    private objectsRepository: ObjectsRepository,
    private imageUploadProvider: ImageUploadProvider,
  ) {}

  async execute(id: string): Promise<ObjectWithImageUrl | null> {
    const object = await this.objectsRepository.findById(id);

    if (!object) {
      return null;
    }

    const result = {
      id: object.id,
      name: object.name,
      brand: object.brand,
      category: object.category,
      color: object.color,
      date: object.date,
      local: object.local,
      value: object.value,
      devolutionId: object.devolutionId,
      imageUrl: null,
    };

    if (!object.imageKey) {
      return result;
    }

    const imageUrl = await this.imageUploadProvider.getImageUrl(
      object.imageKey,
    );

    return {
      id: object.id,
      name: object.name,
      brand: object.brand,
      category: object.category,
      color: object.color,
      date: object.date,
      local: object.local,
      value: object.value,
      devolutionId: object.devolutionId,
      imageUrl,
    };
  }
}
