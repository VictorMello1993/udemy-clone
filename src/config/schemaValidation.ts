import Joi from "joi";

export const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      "string.email": "E-mail inválido",
    }),
});
