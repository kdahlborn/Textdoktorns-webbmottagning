import { Router } from 'express';
import { authorizeAdmin } from '../middlewares/auth.middleware.js';
import * as faqsController from '../controllers/faqs.controller.js';

const router = Router();

// GET FAQ
router.get('/', faqsController.getFaqs);

// POST FAQ
router.post('/', authorizeAdmin, faqsController.createFaq);

// PUT FAQ
router.put('/:faqId', authorizeAdmin, faqsController.updateFaq);

// DELETE FAQ
router.delete('/:faqId', authorizeAdmin, faqsController.removeFaq);

export default router;
