import * as contactService from '../services/contact.service.js';

export const sendContactMessage = async (req, res, next) => {
    const { name, email, message } = req.body;

    console.log('NAME:', name);
    console.log('EMAIL:', email);
    console.log('MESSAGE:', message);

    if (!name || !email || !message) {
        return next({
            status: 400,
            message: 'Name, email and message is required.',
        });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return next({
            status: 400,
            message: 'Invalid email address',
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
