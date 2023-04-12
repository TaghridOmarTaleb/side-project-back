import express from 'express';
const router = express.Router();
import controller from '../controllers/brand.js';


router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


export default router;