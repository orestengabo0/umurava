import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';

dotenv.config();
const app = express();
console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();

app.listen(3000, () => console.log('Server is running on port 3000'));