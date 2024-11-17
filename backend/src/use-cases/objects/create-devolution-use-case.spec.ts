import { CreateDevolutionUseCase } from './create-devolution-use-case';
import { DevolutionInMemoryRepository } from '@repositories/in-memory/devolution-in-memory-repository';

describe('Create Devolution Use Case', () => {
  it('should create and persist a devolution with current date', async () => {
    const devolutionRepository = new DevolutionInMemoryRepository();
    const sut = new CreateDevolutionUseCase(devolutionRepository);

    const devolutionData = {
      name: 'John Doe',
      rg: '123456789',
      cpf: '12345678900',
      objectId: 'fake-object-id',
    };

    const devolution = await sut.execute(devolutionData);

    expect(devolution.id).toBeDefined();
    expect(devolution.name).toBe('John Doe');
    expect(devolution.rg).toBe('123456789');
    expect(devolution.cpf).toBe('12345678900');
    expect(devolution.objectId).toBe('fake-object-id');
    expect(devolution.date).toBeDefined();

    expect(devolution.date).toBeInstanceOf(Date);
    expect(devolution.date.getTime()).toBeCloseTo(new Date().getTime(), -2);

    expect(devolutionRepository.devolutions).toHaveLength(1);
    expect(devolutionRepository.devolutions[0]).toEqual(devolution);
  });
});
