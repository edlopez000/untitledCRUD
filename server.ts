import express from 'express';
import path from 'path';

const app = express();

const assetsRouter = require('./server/assets-router');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/src', assetsRouter);

app.get('/api/v1', (req, res) => {
  res.json({
    project: 'React and Express Boilerplate',
    from: 'Vanaldito',
  });
});

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`App running in port ${PORT}`);
});
