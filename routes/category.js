import express from 'express';
const router = express.Router();
// import controller from '../controllers/category.js';
import { getAll, getById, post, put, deleteCategory } from '../controllers/category.js';


router.get('/all', getAll);
router.get('/:id', getById);
router.post('/', post);
router.put('/:id', put);
router.delete('/:id', deleteCategory);


export default router;