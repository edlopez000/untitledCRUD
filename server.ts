import express from 'express';
import path from 'path';
import UsersRouter from './server/routes/users';

const app = express();

const assetsRouter = require('./server/assets-router');

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/src', assetsRouter);
app.use('/api', UsersRouter);

app.get('/api/v1', (req, res) => {
  res.json({
    project: 'untitledCRUD',
    version: '0.0.1',
  });
});

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}/ `);
});
