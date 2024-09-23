import { FastifyInstance } from 'fastify';
import { authMiddleware } from '../../../middlewares/auth';
import { updateUserInfo } from './updateUserInfo';
import { getUserInfo } from './getUserInfo';
import { updateUserPassword } from './updatePassword';

export async function userHandler(app: FastifyInstance) {
  app.addHook('preHandler', authMiddleware);

  app.get('/', getUserInfo);
  app.put('/password', updateUserPassword);
  app.put('/', updateUserInfo);
}
