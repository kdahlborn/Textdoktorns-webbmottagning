import * as pagesService from '../services/pages.service.js';

// Get all pages
export const getPages = async (req, res, next) => {
    const result = await pagesService.getPages();
    console.log(result);

    if (result.success) {
        res.json({
            success: true,
            pages: result.pages,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};

// Get page by name
export const getPageByName = async (req, res, next) => {
    const { pageName } = req.params;
    const result = await pagesService.getPageByName(pageName);

    if (result.success) {
        res.json({
            success: true,
            page: result.page,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};

// Add new page
export const addNewPage = async (req, res, next) => {
    const page = req.body;

    if (!page) {
        return next({
            status: 400,
            message: 'No page provided in request body',
        });
    }

    const result = await pagesService.addNewPage(page);

    if (result.success) {
        res.status(201).json({
            success: true,
            message: 'Page added successfully',
            page: result.page,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};
