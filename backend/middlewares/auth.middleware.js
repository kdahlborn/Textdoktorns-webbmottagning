import { verifyToken } from '../utils/jwt.util.js';

export const authorizeAdmin = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        next({
            status: 401,
            message: 'No token provided',
        });
    }

    const verified = verifyToken(token);

    if (!verified.success) {
        next({
            status: 401,
            message: verified.message,
        });
    }

    req.admin = verified.admin;

    next();
};
