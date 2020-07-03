import express, { Request, Response, Router } from 'express';
import { mongooseModelPost } from '../models/posts';

const postRouter: Router = express.Router();

postRouter.post('/data', (req: Request<any, any, any, any>, res: Response<any>) => {
  res.send('this is it');
});

postRouter.post('/', async (req, res) => {
  console.log('this is body', req.body);
  const post = new mongooseModelPost({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const posts = await post.save();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

export { postRouter };
