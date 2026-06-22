import Page from '../models/page.model.js';

// Get pages
export const getPages = async () => {
    try {
        const result = await Page.find();

        return {
            success: true,
            pages: result,
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

// Add new page
export const addNewPage = async (page) => {
    try {
        const newPage = await Page.create({
            ...page,
        });

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
export const updatePage = async (page, update) => {
    try {
        const pageExist = await Page.findOne({ page });
        if (!pageExist) throw new Error(`Could not find page: '${page.page}'`);

        const updatedPage = await Page.findOneAndUpdate(
            { page },
            { content: update },
            { returnDocument: 'after' },
        );
    } catch (error) {}
};
