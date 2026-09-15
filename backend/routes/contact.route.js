import { Router } from 'express';
import { sendContactMessage } from '../controllers/contact.controller.js';

const router = Router();

// POST send contact message
router.post('/', sendContactMessage);

export default router;
