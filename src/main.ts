import express from 'express';
import logger from './pino.logger';
import { userRouter } from './Modules/Users/user.router';
import { taskRouter } from './Modules/Tasks/tasks.router';

const server = express();
const port = 2000;
server.use('/task', taskRouter);
server.use('/user', userRouter);



server.listen(port, () => {
  logger.info ("Listening on port 2000")
  console.log(`Listening on port ${port}`);
});
