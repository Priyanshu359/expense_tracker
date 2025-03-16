import { Request, Response } from 'express';
import Category from '../models/category';
import { categorySchema } from '../validators/categoryValidator';

export const addCategory = async (req: Request, res: Response) => {
    try {
        const { error } = categorySchema.validate(req.body);
        if (error) res.status(400).send({ error: error.details[0].message });

        const category = await Category.create({
            name: req.body.name,
        });
        res.status(201).send(category);
    }
    catch (err) {
        res.status(400).send({ error: "Internal Server error" });
    }
}