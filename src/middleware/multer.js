import multer from 'multer';

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileFilter: 2 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const AllowedFiles = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
    ];

    if (AllowedFiles.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only images allowed'), false);
    }
  },
});
