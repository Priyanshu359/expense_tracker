import express from 'express';
import { addExpense, getUserExpense } from '../controllers/expenseController';

const router = express.Router();

router.post('/', addExpense);
router.get('/:userId', getUserExpense);

export default router;