import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
    page: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
});

const Page = mongoose.model('Page', pageSchema);

export default Page;
