import * as authService from '../services/auth.service.js';
import { comparePasswords, hashPassword } from '../utils/bcrypt.util.js';
import { signToken } from '../utils/jwt.util.js';

// Register admin
export const registerAdmin = async (req, res, next) => {
    const newAdmin = req.body;

    if (!newAdmin) {
        return next({
            status: 400,
            message: 'No request body provided',
        });
    }

    if (newAdmin.password !== newAdmin.confirmPassword) {
        return next({
            status: 400,
            message: 'Passwords do not match',
        });
    }

    const result = await authService.registerAdmin({
        username: newAdmin.username.trim().toLowerCase(),
        password: await hashPassword(newAdmin.password),
    });

    if (result.success) {
        res.status(201).json({
            success: true,
            message: 'Admin registered successfully',
        });
    } else {
        next({
            status: 401,
            message: result.message,
        });
    }
};

// Login admin
export const loginAdmin = async (req, res, next) => {
    const admin = req.body;

    if (!admin) {
        return next({
            status: 400,
            message: 'No admin provided in request body',
        });
    }

    const result = await authService.getAdmin(
        admin.username.trim().toLowerCase(),
    );

    if (result.success) {
        if (await comparePasswords(admin.password, result.admin.password)) {
            const token = signToken({
                username: result.admin.username,
            });

            res.json({
                success: true,
                message: 'Admin logged in successfully',
                token,
            });
        } else {
            next({
                status: 401,
                message: 'Invalid username or password',
            });
        }
    } else {
        next({
            status: 401,
            message: 'Invalid username or password',
        });
    }
};
