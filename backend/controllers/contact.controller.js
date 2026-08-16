import * as contactService from '../services/contact.service.js';

export const sendContactMessage = async (req, res, next) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return next({
            status: 400,
            message: 'Name, email and message is required.',
        });
    }

    const result = await contactService.sendContactMessage({
        name,
        email,
        message,
    });

    if (result.success) {
        res.json({
            success: true,
            message: result.message,
        });
    } else {
        next({
            status: 500,
            message: result.message,
        });
    }
};
