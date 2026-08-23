import Joi from 'joi';

const adminSchema = Joi.object({
    username: Joi.string().min(3).required(),

    password: Joi.string()
        .min(8)
        .pattern(/(?=.*[A-Z])(?=.*\d)/)
        .required()
        .messages({
            'string.empty': 'Lösenord krävs',
            'string.min': 'Lösenordet måste innehålla minst 8 tecken',
            'string.pattern.base':
                'Lösenordet måste innehålla minst en versal och en siffra',
        }),

    confirmPassword: Joi.string().required(),
});

export default adminSchema;
