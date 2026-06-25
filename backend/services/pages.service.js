import Page from '../models/page.model.js';

// Get pages
export const getPages = async () => {
    try {
        const pages = await Page.find();

        return {
            success: true,
            pages,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Get page by name
export const getPageByName = async (pageName) => {
    try {
        const result = await Page.findOne({ page: pageName });

        if (!result) throw new Error('Page not found');

        return {
            success: true,
            page: result,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Create page
export const createPage = async (page) => {
    try {
        const newPage = await Page.create(page);

        return {
            success: true,
            page: newPage,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Update page
export const updatePage = async (pageName, content) => {
    try {
        const page = await Page.findOne({ page: pageName });
        if (!page) throw new Error(`Could not find page: '${pageName}'`);

        page.content = content;

        const updatedPage = await page.save();

        return {
            success: true,
            page: updatedPage,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};
