import { Joi, Segments } from 'celebrate';

export const userRegisterSchema = {
  [Segments.BODY]: Joi.object({
    username: Joi.string().trim(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().min(8).required(),
  }),
};

export const userLoginSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};
