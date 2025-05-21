import logger from '../../pino.logger';
import express from 'express';
export const taskRouter = express.Router();

taskRouter.get('/:id', (req, res) => {
  const taskId = req.params.id;
  logger.info ("Task")
  res.json({ message: `Вы пытаетесь прочитать задачу по id= ${taskId}` });
});
taskRouter.put('/:id', (req: Request, res: Response) => {
  const taskId = req.params.id;
  logger.info ("Task updated")
  res.json({ message: `Вы пытаетесь обновить задачу по id=${taskId}` });
});
taskRouter.put('/task', (req: Request, res: Response) => {
  logger.info ("[]")
  res.json([]);
});