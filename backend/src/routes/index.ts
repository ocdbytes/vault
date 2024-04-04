import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { getBalanceRoute } from './getBalance';
import getRegisterRoute from './register';

export function declareRoutes(fastify: FastifyInstance) {
  getStatusRoute(fastify);
  getBalanceRoute(fastify);
  getRegisterRoute(fastify);
}

function getStatusRoute(fastify: FastifyInstance) {
  fastify.get(
    '/status',
    async function handler(_request: FastifyRequest, _reply: FastifyReply) {
      return handleGetStatus();
    },
  );
}

function handleGetStatus() {
  return { status: 'OK' };
}
