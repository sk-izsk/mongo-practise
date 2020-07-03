import express, { Router } from 'express';
import { mongooseModelPost } from '../models/posts';

const deleteRouter: Router = express.Router();

deleteRouter.delete('/:postId', async (req, res) => {
  try {
    const post = await mongooseModelPost.remove({ _id: req.params.postId });
    res.json(post);
  } catch (err) {
    res.json(err);
  }
});

export { deleteRouter };
