import joi from 'joi';

export const validUserSchema = joi.object({
    name:joi.string().trim().required(),
    email:joi.string().trim().email().required(),
    password:joi.string().trim().required(),
    confirmPassword:joi.ref('password')
});

export const loginValidSchema = joi.object({
    email: joi.string().trim().email().required(),
    password: joi.string().trim().required()
})