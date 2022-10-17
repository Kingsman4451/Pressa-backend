import { Router } from "express";
import controller from './controller.js';
import checktoken from '../../middlewares/checktoken.js'
import validation from '../../middlewares/validation.js'

const router = Router();

router.get('/subcategories', controller.GET)
router.get('/subcategories/:subcategoryId', controller.GET)
router.post('/admin/subcategories', checktoken, validation, controller.POST)
router.put('/admin/subcategories/:subcategoryId', checktoken, controller.PUT)
router.delete('/admin/subcategories/:subcategoryId', checktoken, controller.DELETE)

export default router;