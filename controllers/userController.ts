import { Request, Response } from "express";
import User from "../models/user";
import { userSchema } from "../validators/userValidator";

export const addUser = async (req: Request, res: Response) => {
    try {
        const { error } = userSchema.validate(req.body);
        if (error) res.status(400).send({ error: error.details[0].message });

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
        });
        res.status(201).send(user);
    }
    catch (err) {
        res.status(400).send({ error: "Internal Server error" });
    }
};
