import mongoose from 'mongoose';

export default async function connectMongoDB() {
  try {
    const url = process.env.MONGO_URL;
    await mongoose.connect(url);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.log('Failed to connect', error.message);
    process.exit(1);
  }
}
