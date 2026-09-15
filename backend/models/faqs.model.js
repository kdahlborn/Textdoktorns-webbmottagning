import mongoose from 'mongoose';

const languageSchema = new mongoose.Schema(
    {
        sv: { type: String, default: '' },
        en: { type: String, default: '' },
        de: { type: String, default: '' },
        es: { type: String, default: '' },
        fr: { type: String, default: '' },
        ru: { type: String, default: '' },
    },
    { _id: false },
);

const faqSchema = new mongoose.Schema(
    {
        faqId: {
            type: String,
            unique: true,
            required: true,
        },
        question: {
            type: languageSchema,
            required: true,
        },
        answer: {
            type: languageSchema,
            required: true,
        },
    },
    { timestamps: true },
);

const Faq = mongoose.model('Faq', faqSchema);

export default Faq;
