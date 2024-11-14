import { CreateObjectUseCase } from './create-object-use-case';
import { ObjectsInMemoryRepository } from '../../repositories/in-memory/objects-in-memory-repository';
import { InMemoryImageUploadProvider } from '../../providers/in-memory/in-memory-image-upload';

describe('Create Object Use Case', () => {
  it('should create an object', async () => {
    const objectsRepository = new ObjectsInMemoryRepository();
    const imageUploadProvider = new InMemoryImageUploadProvider();
    const sut = new CreateObjectUseCase(objectsRepository, imageUploadProvider);

    const object = await sut.execute({
      name: 'iPhone 13',
      brand: 'Apple',
      category: 'ACCESSORIES',
      color: 'Preto',
      date: new Date('2024-11-22'),
      local: 'UniCEUB',
      value: '4.000,00',
      devolutionId: null,
      image: {
        file: Buffer.from('fake-image-content'),
        filename: 'carteira-foto.jpg',
      },
    });

    expect(object.id).toBeDefined();
    expect(object.imageKey).toBeDefined();
    expect(object.name).toBe('iPhone 13');
    expect(imageUploadProvider.uploads).toHaveLength(1);
  });
});
