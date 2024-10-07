import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';

import postRoutes from './routes/postRoutes.js';
import falRoutes from './routes/falRoutes.js'

dotenv.config();

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'https://imagen-stable.vercel.app'],
}));
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/post/', postRoutes);
app.use('/api/v1/fal/', falRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
});


const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
  app.listen(8080, ()=> console.log('server started on port http://localhost:8080'))

};

startServer();
