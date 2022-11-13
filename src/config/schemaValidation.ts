import Joi from "joi";

export const schema = Joi.object({
  email: Joi.string().required().email().messages({
    "string.email": "E-mail inválido",
  }),
});
