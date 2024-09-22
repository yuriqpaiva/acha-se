import fastify from 'fastify';
import multipart from '@fastify/multipart';
import cors from '@fastify/cors';
import { objectsHandler } from './routes/objects';
import { authHandler } from './routes/auth';
import { devolutionHandler } from './routes/devolution';

const server = fastify();

const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;
const host = process.env.NODE_ENV === 'development' ? 'localhost' : '0.0.0.0';

server.register(cors, {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
});

server.register(multipart, {
  limits: {
    fileSize: 1024000000,
  },
});

server.register(objectsHandler, { prefix: '/objects' });
server.register(devolutionHandler, { prefix: '/devolutions' });
server.register(authHandler, { prefix: '/auth' });

server
  .listen({ port, host })
  .then((port) => {
    console.log(`Running at: ${port}`);
  })
  .catch((error) => {
    console.error('Error starting server:', error);
  });
