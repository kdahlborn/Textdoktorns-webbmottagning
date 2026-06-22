import jwt from 'jsonwebtoken';

export const signToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: 60 * 60,
    });

    return token;
};

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        return {
            success: true,
            admin: decoded,
        };
    } catch (error) {
        return {
            success: true,
            message: 'Invalid token',
        };
    }
};
