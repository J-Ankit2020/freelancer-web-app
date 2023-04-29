import { config } from 'dotenv';
config();
import 'express-async-errors';

import express from 'express';
import morgan from 'morgan';
import { connectMongoose } from './db/mongoose.js';
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';
import authenticateUser from './middleware/auth.js';
import notFoundMiddleWare from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

// connect to MongoDB
connectMongoose();

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'api', hel: 'dhsfhs' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
