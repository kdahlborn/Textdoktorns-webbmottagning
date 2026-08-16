import 'dotenv/config'; // Läser in .env direkt för hela appen
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRouter from './routes/auth.route.js';
import pagesRouter from './routes/pages.route.js';
import faqsRouter from './routes/faqs.route.js';
import languageLinksRouter from './routes/languageLinks.route.js';
import contactRouter from './routes/contact.route.js';
import { logger } from './middlewares/logger.middleware.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';

// Config
const app = express();
const PORT = process.env.PORT || 8081;
mongoose.connect(process.env.CONNECTION_STRING);
const database = mongoose.connection;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/auth', authRouter);
app.use('/api/pages', pagesRouter);
app.use('/api/faqs', faqsRouter);
app.use('/api/language-links', languageLinksRouter);
app.use('/api/contact', contactRouter);

// Server
database.on('error', (error) => console.log(error));
database.once('connected', () => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

app.use(errorHandler);
