import { Readable } from 'node:stream';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const saveFileToCloudinary = async (buffer, userId) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'notes-app/avatars',
        resource_type: 'image',
        public_id: `avatar_${userId}`,
        overwrite: true,
        unique_filename: false,
      },
      (error, result) => (error ? reject(error) : resolve(result)),
    );

    Readable.from(buffer).pipe(uploadStream);
  });
};
