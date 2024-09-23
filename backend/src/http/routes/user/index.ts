import { FastifyInstance } from 'fastify';
import { authMiddleware } from '../../../middlewares/auth';
import { updateUserInfo } from './updateUserInfo';
import { getUserInfo } from './getUserInfo';

export async function userHandler(app: FastifyInstance) {
  app.addHook('preHandler', authMiddleware);

  app.get('/', getUserInfo);
  app.put('/', updateUserInfo);
}
