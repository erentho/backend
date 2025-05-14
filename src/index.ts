import express from 'express';
const server = express();
const port = 2000;
server.post('/user/register', (req, res) => {
  res.json({ message: 'Вы пытаетесь зарегистрироваться!' });
  server.post('/user/login', (req, res) => {
    res.json({ message: 'Вы пытаетесь войти!' });
  });
});
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
