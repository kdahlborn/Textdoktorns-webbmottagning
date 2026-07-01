import * as pagesService from '../services/pages.service.js';

// Get pages
export const getPages = async (req, res, next) => {
    const result = await pagesService.getPages();

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

// Create page
export const addNewPage = async (req, res, next) => {
    const page = req.body;

    if (!page) {
        return next({
            status: 400,
            message: 'No page provided in request body',
        });
    }

    const result = await pagesService.createPage(page);

    if (result.success) {
        res.status(201).json({
            success: true,
            message: 'Page created successfully',
            page: result.page,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};

// Update page
export const updatePage = async (req, res, next) => {
    const { page } = req.params;
    const pageData = req.body;
    const result = await pagesService.updatePage(page, pageData);

    if (result.success) {
        res.json({
            success: true,
            message: 'Page updated successfully',
            page: result.page,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};
