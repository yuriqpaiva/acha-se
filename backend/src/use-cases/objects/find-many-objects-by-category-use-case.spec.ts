import { FindManyObjectsByCategoryUseCase } from './find-many-objects-by-category-use-case';
import { ObjectsInMemoryRepository } from '@repositories/in-memory/objects-in-memory-repository';
import { InMemoryImageUploadProvider } from '@providers/in-memory/in-memory-image-upload';
import { Category } from '@prisma/client';

describe('Find Many Objects By Category Use Case', () => {
  it('should return all objects when no category is provided', async () => {
    const objectsRepository = new ObjectsInMemoryRepository();
    const imageUploadProvider = new InMemoryImageUploadProvider();
    const sut = new FindManyObjectsByCategoryUseCase(
      objectsRepository,
      imageUploadProvider,
    );

    await objectsRepository.create({
      id: '1',
      name: 'iPhone',
      brand: 'Apple',
      category: Category.ELETRONIC,
      color: 'Black',
      date: new Date(),
      local: 'Building A',
      value: '1000',
      imageKey: 'iphone-image.jpg',
      devolutionId: null,
    });

    await objectsRepository.create({
      id: '2',
      name: 'Wallet',
      brand: 'Generic',
      category: Category.ACCESSORIES,
      color: 'Brown',
      date: new Date(),
      local: 'Building B',
      value: '50',
      imageKey: 'wallet-image.jpg',
      devolutionId: null,
    });

    const objects = await sut.execute();

    expect(objects).toHaveLength(2);
    expect(objects[0].imageUrl).toBeDefined();
    expect(objects[1].imageUrl).toBeDefined();
  });

  it('should return only objects of specified category', async () => {
    const objectsRepository = new ObjectsInMemoryRepository();
    const imageUploadProvider = new InMemoryImageUploadProvider();
    const sut = new FindManyObjectsByCategoryUseCase(
      objectsRepository,
      imageUploadProvider,
    );

    await objectsRepository.create({
      id: '1',
      name: 'iPhone',
      brand: 'Apple',
      category: Category.ELETRONIC,
      color: 'Black',
      date: new Date(),
      local: 'Building A',
      value: '1000',
      imageKey: 'iphone-image.jpg',
      devolutionId: null,
    });

    await objectsRepository.create({
      id: '2',
      name: 'Wallet',
      brand: 'Generic',
      category: Category.ACCESSORIES,
      color: 'Brown',
      date: new Date(),
      local: 'Building B',
      value: '50',
      imageKey: 'wallet-image.jpg',
      devolutionId: null,
    });

    const objects = await sut.execute(Category.ELETRONIC);

    expect(objects).toHaveLength(1);
    expect(objects[0].name).toBe('iPhone');
    expect(objects[0].category).toBe(Category.ELETRONIC);
    expect(objects[0].imageUrl).toBeDefined();
  });
});
