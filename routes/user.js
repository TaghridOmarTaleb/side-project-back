import express from 'express';
const router = express.Router();
import controller from '../controllers/user.js';


router.get('/all', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.delete('/:id', controller.deleteUser);


export default router;