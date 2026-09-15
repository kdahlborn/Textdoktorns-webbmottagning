import * as languageLinksService from '../services/languageLinks.service.js';

// Get language links
export const getLanguageLinks = async (req, res, next) => {
    const result = await languageLinksService.getLanguageLinks();

    if (result.success) {
        res.json({
            success: true,
            languageLinks: result.languageLinks,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};

// Update language links
export const updatedLanguageLinks = async (req, res, next) => {
    const languageLinks = req.body;

    if (!languageLinks) {
        return next({
            status: 400,
            message: 'No language links provided in request body',
        });
    }
    const result =
        await languageLinksService.updateLanguageLinks(languageLinks);

    if (result.success) {
        res.json({
            success: true,
            message: 'Language links updated successfully',
            languageLinks: result.languageLinks,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};
