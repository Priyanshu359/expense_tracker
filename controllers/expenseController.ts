import { Request, Response } from 'express';
import Expense from '../models/expense';
import { expenseSchema } from '../validators/expenseValidator';

export const addExpense = async (req: Request, res: Response) => {
    try {
        const { error } = expenseSchema.validate(req.body);
        if (error) res.status(400).send({ error: error.details[0].message });
        
        const expense = await Expense.create({
            userId: req.body.userId,
            categoryId: req.body.categoryId,
            amount: req.body.amount,
            description: req.body.description,
        });
        res.status(201).send(expense);
    }
    catch (err) {
        res.status(500).send({ error: "Internal Server error" });
    }
};

export const getUserExpense = async (req: Request, res: Response) => {
    try {
        const expenses = await Expense.findAll({ where: { userId: req.params.userId } });
        res.status(200).json(expenses);
    }
    catch (err) {
        res.status(500).send({ error: "Internal Server error" });
    }
};