import * as faqService from '../services/faq.service.js';

// Get FAQ
export const getFaq = async (req, res, next) => {
    const result = await faqService.getFaq();

    if (result.success) {
        res.json({
            success: true,
            faqs: result.faqs,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};

// create FAQ
export const createFaq = async (req, res, next) => {
    const faq = req.body;

    if (!faq) {
        return next({
            status: 400,
            message: 'No FAQ provided in request body',
        });
    }

    const result = await faqService.createFaq({
        faqId: crypto.randomUUID().substring(0, 5),
        ...faq,
    });

    if (result.success) {
        res.status(201).json({
            success: true,
            message: 'FAQ created successfully',
            faq: result.faq,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};

// Update FAQ
export const updateFaq = async (req, res, next) => {
    const { faqId } = req.params;
    const update = req.body;

    const result = await faqService.updateFaq(faqId, update);

    if (result.success) {
        res.status(201).json({
            success: true,
            message: 'FAQ updated successfully',
            faq: result.faq,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};

// Remove FAQ
export const removeFaq = async (req, res, next) => {
    const { faqId } = req.params;

    const result = await faqService.removeFaq(faqId);

    if (result.success) {
        res.status(201).json({
            success: true,
            message: 'FAQ removed successfully',
            faq: result.faq,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};
