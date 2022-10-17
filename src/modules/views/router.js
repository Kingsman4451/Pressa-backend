import { Router } from "express";
import controller from './controller.js';

const router = Router();

router.post('/views/:eventId', controller.POST)

export default router;