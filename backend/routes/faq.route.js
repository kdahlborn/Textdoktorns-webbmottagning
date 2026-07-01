import { Router } from 'express';
import { authorizeAdmin } from '../middlewares/auth.middleware.js';
import * as faqController from '../controllers/faq.controller.js';

const router = Router();

router.use(authorizeAdmin);

// GET FAQ
router.get('/', faqController.getFaq);

// POST FAQ
router.post('/', faqController.createFaq);

// PUT FAQ
router.put('/:faqId', faqController.updateFaq);

// DELETE FAQ
router.delete('/:faqId', faqController.removeFaq);

export default router;
