import Joi from "joi";

export const CREATE_WISH_SCHEMA = Joi.object({
  name: Joi.string().required(),
  wish: Joi.string().required(),
});
