import Admin from '../models/admin.model.js';

// Register admin
export const registerAdmin = async (newAdmin) => {
    try {
        const result = await Admin.create(newAdmin);

        return {
            success: true,
            admin: result,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Get admin
export const getAdmin = async (username) => {
    try {
        const result = await Admin.findOne({ username });

        if (result) {
            return {
                success: true,
                admin: result,
            };
        } else throw new Error('Admin not found');
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};
