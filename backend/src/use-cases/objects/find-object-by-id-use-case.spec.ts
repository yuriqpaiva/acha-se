import { FindObjectByIdUseCase } from './find-object-by-id-use-case';
import { ObjectsInMemoryRepository } from '@repositories/in-memory/objects-in-memory-repository';
import { InMemoryImageUploadProvider } from '@providers/in-memory/in-memory-image-upload';
import { type Objects } from '@prisma/client';

describe('Find Object By Id Use Case', () => {
  it('should return object with image url when object exists with image', async () => {
    const objectsRepository = new ObjectsInMemoryRepository();
    const imageUploadProvider = new InMemoryImageUploadProvider();
    const sut = new FindObjectByIdUseCase(
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

    const object = await sut.execute('obj-1');

    expect(object).toEqual(
      expect.objectContaining({
        id: 'obj-1',
        name: 'iPhone 13',
        imageUrl: expect.stringContaining('fake-image-1.jpg'),
      }),
    );
    expect(object).not.toHaveProperty('imageKey');
  });

  it('should return object without image url when object exists without image', async () => {
    const objectsRepository = new ObjectsInMemoryRepository();
    const imageUploadProvider = new InMemoryImageUploadProvider();
    const sut = new FindObjectByIdUseCase(
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
      imageKey: null,
      devolutionId: null,
    } as Objects);

    const object = await sut.execute('obj-1');

    expect(object).toEqual(
      expect.objectContaining({
        id: 'obj-1',
        name: 'iPhone 13',
        imageUrl: null,
      }),
    );
  });

  it('should return null when object does not exist', async () => {
    const objectsRepository = new ObjectsInMemoryRepository();
    const imageUploadProvider = new InMemoryImageUploadProvider();
    const sut = new FindObjectByIdUseCase(
      objectsRepository,
      imageUploadProvider,
    );

    const object = await sut.execute('non-existent-id');

    expect(object).toBeNull();
  });
});
