import Joi from "joi";

export const expenseSchema = Joi.object({
    userId: Joi.number().required(),
    categoryId: Joi.number().required(),
    amount: Joi.number().required(),
    description: Joi.string().allow(""),
})