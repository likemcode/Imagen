import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);

  mongoose.connect(url)
    .then(()=>console.log('MongoDB connected'))
    .catch((err)=> console.lof(err))
}

export default connectDB;