import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bootcampUofT';
const MONGODB_URI = process.env.MONGODB_URI || '';

const db = async (): Promise<typeof mongoose.connection> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('NoSQLBoster for MongoDB Database OKAY!.');
    return mongoose.connection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Database connection failed.');
  }
};

export default db;