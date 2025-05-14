import express from 'express';

const server = express();
const port = 2000;

server.post('/user/register', (req, res) => {
  res.json({ message: 'Вы пытаетесь зарегистрироваться!' });
});

server.post('/user/login', (req, res) => {
  res.json({ message: 'Вы пытаетесь войти!' });
});

server.post('/user/logout', (req, res) => {
  res.json({ message: 'Вы пытаетесь выйти!' });
});

server.get('/task/:id', (req, res) => {
  const taskId = req.params.id;
  res.json({ message: `Вы пытаетесь прочитать задачу по id= ${taskId}` });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
