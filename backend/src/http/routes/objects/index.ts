import { FastifyInstance } from 'fastify';
import { handleCreateObject } from './create';
import { authMiddleware } from '../../../middlewares/auth';
import { handleFindObjectsByCategory } from './findByCategory';
import { handleDevolution } from './devolution';
import { handleFindObjectById } from './handleFindObjectById';

export async function objectsHandler(app: FastifyInstance) {
  app.addHook('preHandler', authMiddleware);
  app.post('/', handleCreateObject);
  app.get('/', handleFindObjectsByCategory);
  app.get('/:objectId', handleFindObjectById);
  app.post('/devolution', handleDevolution);
}
