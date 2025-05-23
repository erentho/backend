import express from 'express';
import { logRoutes } from './bootstrap/log-routes';
import logger from './logger';
import { taskRouter } from './modules/task/task.router';
import { userRouter } from './modules/user/user.router';

const server = express();
const port = 2000;
server.use('/task', taskRouter);
server.use('/user', userRouter);

logRoutes(server);

server.listen(port, () => {
  logger.info('Listening on port 2000');
  console.log(`Listening on port ${port}`);
});
