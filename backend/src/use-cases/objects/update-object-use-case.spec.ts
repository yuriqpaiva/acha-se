import { UpdateObjectUseCase } from '@use-cases/objects/update-object-use-case';
import { ObjectsInMemoryRepository } from '@repositories/in-memory/objects-in-memory-repository';
import { InMemoryImageUploadProvider } from '@providers/in-memory/in-memory-image-upload';
import { randomUUID } from 'node:crypto';

describe('Update Object Use Case', () => {
  it('should update an object', async () => {
    const objectsRepository = new ObjectsInMemoryRepository();
    const imageUploadProvider = new InMemoryImageUploadProvider();
    const sut = new UpdateObjectUseCase(objectsRepository, imageUploadProvider);

    // Create an initial object first
    const existingObject = await objectsRepository.create({
      id: randomUUID(),
      name: 'Old iPhone',
      brand: 'Apple',
      category: 'ACCESSORIES',
      color: 'Black',
      date: new Date('2024-01-01'),
      local: 'UniCEUB',
      value: '3.000,00',
      devolutionId: null,
      imageKey: 'old-image-key',
    });

    const updatedObject = await sut.execute(existingObject.id, {
      name: 'iPhone 14',
      brand: 'Apple',
      category: 'ACCESSORIES',
      color: 'White',
      date: new Date('2024-11-22'),
      local: 'UniCEUB',
      value: '5.000,00',
      devolutionId: null,
    });

    expect(updatedObject.id).toBe(existingObject.id);
    expect(updatedObject.name).toBe('iPhone 14');
    expect(updatedObject.color).toBe('White');
    expect(updatedObject.value).toBe('5.000,00');
    expect(updatedObject.imageKey).toBe('old-image-key');
  });

  it('should update object with new image', async () => {
    const objectsRepository = new ObjectsInMemoryRepository();
    const imageUploadProvider = new InMemoryImageUploadProvider();
    const sut = new UpdateObjectUseCase(objectsRepository, imageUploadProvider);

    const existingObject = await objectsRepository.create({
      id: randomUUID(),
      name: 'Old iPhone',
      brand: 'Apple',
      category: 'ACCESSORIES',
      color: 'Black',
      date: new Date('2024-01-01'),
      local: 'UniCEUB',
      value: '3.000,00',
      devolutionId: null,
      imageKey: 'old-image-key',
    });

    const updatedObject = await sut.execute(existingObject.id, {
      name: 'iPhone 14',
      brand: 'Apple',
      category: 'ACCESSORIES',
      color: 'White',
      date: new Date('2024-11-22'),
      local: 'UniCEUB',
      value: '5.000,00',
      devolutionId: null,
      image: {
        file: Buffer.from('new-image-content'),
        filename: 'new-iphone-photo.jpg',
      },
    });

    expect(updatedObject.imageKey).not.toBe('old-image-key');
    expect(imageUploadProvider.uploads).toHaveLength(1);
  });

  it('should throw error when object not found', async () => {
    const objectsRepository = new ObjectsInMemoryRepository();
    const imageUploadProvider = new InMemoryImageUploadProvider();
    const sut = new UpdateObjectUseCase(objectsRepository, imageUploadProvider);

    await expect(() =>
      sut.execute('non-existent-id', {
        name: 'iPhone 14',
        brand: 'Apple',
        category: 'ACCESSORIES',
        color: 'White',
        date: new Date('2024-11-22'),
        local: 'UniCEUB',
        value: '5.000,00',
        devolutionId: null,
      }),
    ).rejects.toThrow('Object not found');
  });
});
