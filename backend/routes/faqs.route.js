import { Router } from 'express';
import { authorizeAdmin } from '../middlewares/auth.middleware.js';
import * as faqsController from '../controllers/faqs.controller.js';

const router = Router();

router.use(authorizeAdmin);

// GET FAQ
router.get('/', faqsController.getFaqs);

// POST FAQ
router.post('/', faqsController.createFaq);

// PUT FAQ
router.put('/:faqId', faqsController.updateFaq);

// DELETE FAQ
router.delete('/:faqId', faqsController.removeFaq);

export default router;
