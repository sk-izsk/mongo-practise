import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { deleteRouter } from './routes/delete';
import { getRouter } from './routes/gets';
import { postRouter } from './routes/posts';
import { updateRouter } from './routes/update';

const PORT: number | string = process.env.PORT || 5000;

const app: express.Application = express();

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.json());

dotenv.config();

app.use('/posts', getRouter, postRouter, deleteRouter, updateRouter);

// app.use('/posts', postRouter);

const allowedOrigins: string[] = [
  'http://localhost:3000',
  'https://izsk.netlify.app',
  'http://localhost:8080',
  'https://izsk-vue.netlify.app',
];
app.use(
  cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean | undefined) => void) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg: string = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  }),
);

const collection: string = 'todo';

mongoose.connect(
  process.env.DB_TOKEN as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  (err) => {
    console.log('connected to db');
    console.log('this is mongo error', err);
  },
);

app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}!`);
});
