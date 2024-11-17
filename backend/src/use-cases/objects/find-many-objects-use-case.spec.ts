import { FindManyObjectsUseCase } from './find-many-objects-use-case';
import { ObjectsInMemoryRepository } from '@repositories/in-memory/objects-in-memory-repository';
import { InMemoryImageUploadProvider } from '@providers/in-memory/in-memory-image-upload';
import { type Objects } from '@prisma/client';

describe('Find Many Objects Use Case', () => {
  it('should return all objects with image urls', async () => {
    const objectsRepository = new ObjectsInMemoryRepository();
    const imageUploadProvider = new InMemoryImageUploadProvider();
    const sut = new FindManyObjectsUseCase(
      objectsRepository,
      imageUploadProvider,
    );

    await objectsRepository.create({
      id: 'obj-1',
      name: 'iPhone 13',
      brand: 'Apple',
      category: 'ACCESSORIES',
      color: 'Preto',
      date: new Date('2024-11-22'),
      local: 'UniCEUB',
      value: '4.000,00',
      imageKey: 'fake-image-1.jpg',
      devolutionId: null,
    } as Objects);

    await objectsRepository.create({
      id: 'obj-2',
      name: 'Carteira',
      brand: 'Nike',
      category: 'ACCESSORIES',
      color: 'Marrom',
      date: new Date('2024-11-22'),
      local: 'UniCEUB',
      value: '50,00',
      imageKey: 'fake-image-2.jpg',
      devolutionId: null,
    } as Objects);

    const objects = await sut.execute();

    console.log('objects', objects);

    expect(objects).toHaveLength(2);
    expect(objects[0]).toEqual(
      expect.objectContaining({
        id: 'obj-1',
        name: 'iPhone 13',
        imageUrl: expect.stringContaining('fake-image-1.jpg'),
      }),
    );
    expect(objects[1]).toEqual(
      expect.objectContaining({
        id: 'obj-2',
        name: 'Carteira',
        imageUrl: expect.stringContaining('fake-image-2.jpg'),
      }),
    );
    expect(objects[0]).not.toHaveProperty('imageKey');
  });

  it('should return empty array when no objects exist', async () => {
    const objectsRepository = new ObjectsInMemoryRepository();
    const imageUploadProvider = new InMemoryImageUploadProvider();
    const sut = new FindManyObjectsUseCase(
      objectsRepository,
      imageUploadProvider,
    );

    const objects = await sut.execute();

    expect(objects).toEqual([]);
  });
});
