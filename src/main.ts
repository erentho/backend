import express from 'express';
import { logRoutes } from './bootstrap/log-routes';
import logger from './pino.logger';

const server = express();
const port = 2000;

logRoutes(server);

server.listen(port, () => {
  logger.info('Listening on port 2000');
  console.log(`Listening on port ${port}`);
});
