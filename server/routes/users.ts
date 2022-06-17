import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import User from '../../src/models/user';

const app = express();
const prisma = new PrismaClient();

app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/users', async (req: Request, res: Response) => {
  let { firstName, lastName, email } = req.body as User;
  const newUser = await prisma.user.create({
    data: { firstName, lastName, email },
  });
  res.status(200).json(newUser);
});

export default app;
