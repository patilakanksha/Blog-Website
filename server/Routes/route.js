import express, { request } from 'express'

import { createPost, getAllPosts, getPost, greet} from '../controller/post-controller.js';

const router = express.Router();


router.post('/create',createPost);
router.get('/posts',getAllPosts);
router.get('/post/:id', getPost);


export default router;