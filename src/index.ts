import express from 'express';
const server = express();
const port = 2000;
server.post('/user/register', (req, res) => {
  res.json({ message: 'Вы пытаетесь зарегестрироваться!' });
});
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
