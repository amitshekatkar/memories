import express from 'express';
import { createPosts, deletePost, getPosts, likePost, updatePost } from '../controllers/posts.js';
const postRouter = express.Router();

postRouter.get('/', getPosts)
postRouter.post('/', createPosts)
postRouter.patch('/:id', updatePost)
postRouter.delete('/:id', deletePost)
postRouter.patch('/:id/likePost', likePost)

export default postRouter;