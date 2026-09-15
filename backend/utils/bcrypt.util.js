import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
    const hashedPassword = bcrypt.hash(password, 10);
    return hashedPassword;
};

export const comparePasswords = async (password, hashedPassword) => {
    const isSame = bcrypt.compare(password, hashedPassword);
    return isSame;
};
