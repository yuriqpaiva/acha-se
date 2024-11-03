import { FastifyInstance } from 'fastify';
import { handleCreateReportLostItem } from './create';
import { SocketStream } from '@fastify/websocket';
import { authMiddleware } from '../../../middlewares/auth';
import { handleFindAllReportsLostItem } from './find-all';
import { verify } from 'jsonwebtoken';

const connections = new Set<SocketStream>();

export async function reportLostItemHandler(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: authMiddleware,
    },
    handleFindAllReportsLostItem,
  );

  app.post('/', (req, res) =>
    handleCreateReportLostItem(req, res, connections),
  );

  app.get<{
    Querystring: { token: string };
  }>('/listen', { websocket: true }, (connection, req) => {
    try {
      const token = req.query.token;

      if (!token) {
        connection.socket.close(1008, 'Token not provided');
        return;
      }

      verify(token, process.env.JWT_PASS as string);

      connections.add(connection);

      connection.socket.on('message', () => {
        connection.socket.send('Connection established');
      });

      connection.socket.on('close', () => {
        connections.delete(connection);
      });
    } catch {
      connection.socket.close(1008, 'Invalid token');
    }
  });
}
