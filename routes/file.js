import express from 'express';
const router = express.Router();
import controller from '../controllers/file.js';


router.get('/all', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.deleteFile);


export default router;