import logger from '../../pino.logger';
import express from 'express';
export const taskRouter = express.Router();

taskRouter.get('/:id', (req, res) => {
  const taskId = req.params.id;
  logger.info ("Task")
  res.json({ message: `Вы пытаетесь прочитать задачу по id= ${taskId}` });
});