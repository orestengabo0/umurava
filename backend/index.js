import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import challengeRouter from './controllers/challenge.controller.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/challenges', challengeRouter);
console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
