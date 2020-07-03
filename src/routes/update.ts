import express, { Router } from 'express';
import { mongooseModelPost } from '../models/posts';

const updateRouter: Router = express.Router();

updateRouter.put('/:postId', async (req, res) => {
  try {
    const post = await mongooseModelPost.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
        },
      },
    );
    res.json(post);
  } catch (err) {
    res.json(err);
  }
});

export { updateRouter };
