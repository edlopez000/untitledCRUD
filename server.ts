import express from 'express';
import path from 'path';
import { PrismaClient, User } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const assetsRouter = require('./server/assets-router');

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/src', assetsRouter);

app.get('/api/v1', (req, res) => {
  res.json({
    project: 'untitledCRUD',
    version: '0.0.1',
  });
});

app.get('/api/users/all', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  let { firstName, lastName, email } = req.body as User;
  const user = await prisma.user.create({
    data: { firstName, lastName, email },
  });
  res.status(200).json(user);
});

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(`App running in port ${PORT}`);
});
