import joi from "joi";

export const signUpSchema = joi.object({
  name: joi.string().required().min(3),
  email: joi.string().email().required(),
  password: joi.string().required().min(6),
  passwordConfirmation: joi.ref("password"),
});

export const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(6),
});
