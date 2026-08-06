import { Router } from 'express';
import { authorizeAdmin } from '../middlewares/auth.middleware.js';
import * as pageController from '../controllers/pages.controller.js';

const router = Router();

router.use();

// GET pages
router.get('/', pageController.getPages);

// GET page by name
router.get('/:pageName', pageController.getPageByName);

// POST new page
router.post('/', authorizeAdmin, pageController.addNewPage);

// PUT update page
router.put('/:page', authorizeAdmin, pageController.updatePage);

export default router;
