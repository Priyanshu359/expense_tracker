import Joi from "joi";

export const categorySchema = Joi.object({
    name: Joi.string().min(3).max(15).required(),
})