import mongoose from 'mongoose';

export function connectMongoose() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));
}
