import { Router } from "express";
import controller from './controller.js';
import checktoken from '../../middlewares/checktoken.js'
import validation from '../../middlewares/validation.js'

const router = Router();

router.get('/categories', controller.GET)
router.get('/categories/:categoryId', controller.GET)
router.post('/admin/categories', checktoken, validation, controller.POST)
router.put('/admin/categories/:categoryId', checktoken, validation, controller.PUT)
router.delete('/admin/categories/:categoryId', checktoken, controller.DELETE)

export default router;