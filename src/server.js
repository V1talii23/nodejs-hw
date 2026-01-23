import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectMongoDB from './db/connectMongoDB.js';
import { errors } from 'celebrate';

import notesRoutes from './routes/notesRoutes.js';
import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import helmet from 'helmet';
import { notFoundHandler } from './middleware/notFoundHandler.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(notesRoutes);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Listen port: ${PORT}`);
});
