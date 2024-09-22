import { FastifyInstance } from 'fastify';
import { authMiddleware } from '../../../middlewares/auth';
import { handleFindAllDevolutions } from './findAll';

export async function devolutionHandler(app: FastifyInstance) {
  app.addHook('preHandler', authMiddleware);
  app.get('/', handleFindAllDevolutions);
}
