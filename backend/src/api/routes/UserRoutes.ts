// backend/src/api/routes/UserRoutes.ts
import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);

export default router;