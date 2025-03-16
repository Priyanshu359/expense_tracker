import express from 'express';
import { addCategory } from '../controllers/categoryController';

const router = express.Router();

router.post('/', addCategory);

export default router;