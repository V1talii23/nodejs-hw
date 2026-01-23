import mongoose from 'mongoose';
import Note from '../models/note.js';

export default async function connectMongoDB() {
  try {
    const url = process.env.MONGO_URL;
    await mongoose.connect(url);
    console.log('✅ MongoDB connection established successfully');
    await Note.syncIndexes();
    console.log('Synced db indexes');
  } catch (error) {
    console.log('Failed to connect', error.message);
    process.exit(1);
  }
}
