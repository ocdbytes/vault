import Fastify from 'fastify';

import { fastifyDrizzle } from '@/db/plugin';
import { declareRoutes } from '@/routes';

export type AppConfiguration = {
  database: {
    connectionString: string;
  };
  app: {
    port: number;
  };
};

export function buildApp(config: AppConfiguration) {
  const app = Fastify();

  app.register(fastifyDrizzle, {
    connectionString: config.database.connectionString,
  });

  // Declare routes
  declareRoutes(app);

  return app;
}

export async function buildAndStartApp(config: AppConfiguration) {
  const app = buildApp(config);

  try {
    await app.listen({ port: config.app.port });
    console.log(`Server listening on port ${config.app.port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
