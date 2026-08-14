import { Router } from 'express';
import { authorizeAdmin } from '../middlewares/auth.middleware.js';
import * as languageLinksController from '../controllers/languageLinks.controller.js';

const router = Router();

// GET language links
router.get('/', languageLinksController.getLanguageLinks);

// PUT update language link
router.put('/', authorizeAdmin, languageLinksController.updatedLanguageLinks);

export default router;
