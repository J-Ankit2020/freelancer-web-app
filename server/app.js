import { config } from 'dotenv';
config();
import express from 'express';
import { connectMongoose } from './db/mongoose.js';

const app = express();

// connect to MongoDB
connectMongoose();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server listening on port 3000');
});

export default app;
