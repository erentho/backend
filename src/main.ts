import express from 'express';
import logger from './pino.logger';

const server = express();
const port = 2000;

server.post('/user/register', (req, res) => {
  logger.info ("Registration")
  res.json({ message: 'Вы пытаетесь зарегистрироваться!' });
});

server.post('/user/login', (req, res) => {
  logger.info ("Login")
  res.json({ message: 'Вы пытаетесь войти!' });
});

server.post('/user/logout', (req, res) => {
  logger.info ("Logout")
  res.json({ message: 'Вы пытаетесь выйти!' });
});

server.get('/task/:id', (req, res) => {
  const taskId = req.params.id;
  logger.info ("Task")
  res.json({ message: `Вы пытаетесь прочитать задачу по id= ${taskId}` });
});

server.listen(port, () => {
  logger.info ("Listening on port 2000")
  console.log(`Listening on port ${port}`);
});
