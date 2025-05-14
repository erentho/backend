import express from 'express';
const server = express();
const port = 2000;
server.post('/user/register', (req, res) => {
  res.json({ message: 'Вы пытаетесь зарегистрироваться!' });
  server.post('/user/login', (req, res) => {
    res.json({ message: 'Вы пытаетесь войти!' });
    server.post('/user/logout', (req, res) => {
      res.json({ message: 'Вы пытаетесь выйти!' });
      server.get('/task', (req, res) => {
        res.json({ message: 'Вы пытаетесь просмотреть список задач!' });
      });
    });
  });
});
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
