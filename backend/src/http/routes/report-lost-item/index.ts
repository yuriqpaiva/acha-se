import { FastifyInstance } from 'fastify';
import { handleCreateReportLostItem } from './create';
import { SocketStream } from '@fastify/websocket';
import { authMiddleware } from '../../../middlewares/auth';

const connections = new Set<SocketStream>();

export async function reportLostItemHandler(app: FastifyInstance) {
  app.post('/', (req, res) =>
    handleCreateReportLostItem(req, res, connections),
  );
  app.get(
    '/listen',
    { websocket: true, preHandler: authMiddleware },
    (connection) => {
      connections.add(connection);

      connection.socket.on('message', () => {
        connection.socket.send('Connection established');
      });
    },
  );
}
