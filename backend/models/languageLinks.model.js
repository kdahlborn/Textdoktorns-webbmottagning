import mongoose from 'mongoose';

const languageLinkSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        url: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true, collection: 'languageLinks' },
);

const LanguageLink = mongoose.model('LanguageLink', languageLinkSchema);

export default LanguageLink;
