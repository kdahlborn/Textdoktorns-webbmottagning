import { Router } from 'express';
import { authorizeAdmin } from '../middlewares/auth.middleware.js';
import {
    addNewPage,
    getPageByName,
    getPages,
} from '../controllers/pages.controller.js';

const router = Router();

router.use(authorizeAdmin);

// GET pages
router.get('/', getPages);

// GET page by name
router.get('/:pageName', getPageByName);

// POST new page
router.post('/', addNewPage);

export default router;
