import { Router } from 'express';
import validate from '../middlewares/validate.middleware.js';
import { loginAdmin, registerAdmin } from '../controllers/auth.controller.js';
import adminSchema from '../validation/admin.validation.js';

const router = Router();

// POST register
router.post('/register', validate(adminSchema), registerAdmin);
// POST login
router.post('/login', loginAdmin);

export default router;
