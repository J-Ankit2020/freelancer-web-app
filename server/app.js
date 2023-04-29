import express from 'express';
import { config } from 'dotenv';
config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
