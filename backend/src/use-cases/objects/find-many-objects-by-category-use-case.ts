import { ObjectsRepository } from '@/repositories/objects-repository';
import { ImageUploadProvider } from '@/providers/image-upload';
import { type Objects, type Category } from '@prisma/client';

interface ObjectWithImageUrl extends Omit<Objects, 'imageKey'> {
  imageUrl: string;
}

export class FindManyObjectsByCategoryUseCase {
  constructor(
    private objectRepository: ObjectsRepository,
    private imageUploadProvider: ImageUploadProvider,
  ) {}

  async execute(category?: Category): Promise<ObjectWithImageUrl[]> {
    const objects = await this.objectRepository.findManyByCategory(category);
    const objectsWithUrls = [];

    for await (const obj of objects) {
      const imageUrl = await this.imageUploadProvider.getImageUrl(
        obj.imageKey!,
      );

      objectsWithUrls.push({
        id: obj.id,
        name: obj.name,
        brand: obj.brand,
        category: obj.category,
        color: obj.color,
        date: obj.date,
        local: obj.local,
        value: obj.value,
        devolutionId: obj.devolutionId,
        imageUrl,
      });
    }

    return objectsWithUrls;
  }
}
