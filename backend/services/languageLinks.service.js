import LanguageLink from '../models/languageLinks.model.js';

// Get language links
export const getLanguageLinks = async () => {
    try {
        const languageLinks = await LanguageLink.find();

        return {
            success: true,
            languageLinks,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Update language links
export const updateLanguageLinks = async (updates) => {
    try {
        await LanguageLink.deleteMany({});

        const updatedLanguageLinks = await LanguageLink.insertMany(updates);

        return {
            success: true,
            languageLinks: updatedLanguageLinks,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};
