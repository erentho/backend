import express from 'express';
import { taskRouter } from './abc/a1/tasks.router';
import { userRouter } from './abc/a2/user.router';
import { logRoutes } from './bootstrap/log-routes';
import logger from './pino.logger';

const server = express();
const port = 2000;
server.use('/task', taskRouter);
server.use('/user', userRouter);

logRoutes(server);

server.listen(port, () => {
  logger.info('Listening on port 2000');
  console.log(`Listening on port ${port}`);
});
