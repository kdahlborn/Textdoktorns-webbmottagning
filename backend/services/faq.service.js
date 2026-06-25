import Faq from '../models/faq.model.js';

// Get FAQ
export const getFaq = async () => {
    try {
        const faqs = await Faq.find();

        return {
            success: true,
            faqs,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Create FAQ
export const createFaq = async (faq) => {
    try {
        const newFaq = await Faq.create(faq);

        return {
            success: true,
            faq: newFaq,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Update FAQ
export const updateFaq = async (faqId, updates) => {
    try {
        const { question, answer } = updates;
        const faq = await Faq.findOne({ faqId });
        if (!faq) throw new Error('Could not find FAQ with provided faqId');

        faq.question = question;
        faq.answer = answer;

        const updatedFaq = await faq.save();

        return {
            success: true,
            faq: updatedFaq,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Remove FAQ
export const removeFaq = async (faqId) => {
    try {
        const faq = await Faq.findOne({ faqId });
        if (!faq) throw new Error('Could not find FAQ with provided faqId');

        const result = await Faq.findOneAndDelete({ faqId });

        return {
            success: true,
            faq: result,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};
