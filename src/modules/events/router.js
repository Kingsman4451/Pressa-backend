import { Router } from "express";
import controller from './controller.js';
import checktoken from '../../middlewares/checktoken.js'
import validation from '../../middlewares/validation.js'

const router = Router();

router.get('/events', controller.GET)
router.get('/events/:eventId', controller.GET)
router.get('/admin/events/:status', checktoken,validation, controller.BYSTATUS)
router.post('/events', controller.postImg,validation, controller.POST)
router.put('/admin/events/:eventId', checktoken, controller.PUT)
router.delete('/admin/events/:eventId', checktoken, controller.DELETE)

export default router;