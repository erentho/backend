import express from 'express';
import logger from '../../pino.logger';

export const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
  logger.info('Registration');
  res.json({ message: 'Вы пытаетесь зарегистрироваться!' });
});

userRouter.post('/login', (req, res) => {
  logger.info('Login');
  res.json({ message: 'Вы пытаетесь войти!' });
});

userRouter.post('/logout', (req, res) => {
  logger.info('Logout');
  res.json({ message: 'Вы пытаетесь выйти!' });
});
