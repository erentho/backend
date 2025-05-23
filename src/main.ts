import express from 'express';
import { logRoutes } from './bootstrap/log-routes';
import { taskRouter } from './modules/tasks/tasks.router';
import { userRouter } from './modules/users/user.router';
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
