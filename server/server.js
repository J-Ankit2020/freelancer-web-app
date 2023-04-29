import app from './app.js';
import { connectMongoose } from './db/mongoose.js';

connectMongoose();

app.listen(5000, () => {
  console.log('Server listening on port 3000');
});
