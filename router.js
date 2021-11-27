import { Router } from 'express';
import Post from './Post.js';

const router = new Router();

router.post('/posts');
router.get('/posts');
router.get('/posts/:id');
router.put('/posts/');
router.delete('/posts/:id');

export default router;
