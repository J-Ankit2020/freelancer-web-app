import express from 'express';

const app = express();

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'api', hel: 'dhsfhs' });
});

app.listen(5000, () => {
  console.log('Server listening on port 3000');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './job/build', 'index.html'));
});

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log('running on ', port);
    });
  } catch (err) {
    console.log('haji');
    console.log(err);
  }
};
start();
