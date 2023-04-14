import express from 'express';
const router = express.Router();
import controller from '../controllers/product.js';


router.get('/all', controller.getAll);
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.put('/soft/:id', controller.softDelete);
router.delete('/:id', controller.delete);


export default router;