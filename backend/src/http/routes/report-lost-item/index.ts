import { FastifyInstance } from 'fastify';
import { handleCreateReportLostItem } from './create';

export async function reportLostItemHandler(app: FastifyInstance) {
  app.post('/', handleCreateReportLostItem);
}
