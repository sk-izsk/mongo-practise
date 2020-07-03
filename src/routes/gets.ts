import express, { Response, Router } from 'express';
import { mongooseModelPost } from '../models/posts';

const getRouter: Router = express.Router();

getRouter.get('/', async (_, res: Response<any>) => {
  try {
    const posts = await mongooseModelPost.find();
    res.json(posts);
  } catch (err) {
    res.json(err);
  }
});

getRouter.get('/:postId', async (req, res) => {
  try {
    const post = await mongooseModelPost.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json(err);
  }
});

export { getRouter };
