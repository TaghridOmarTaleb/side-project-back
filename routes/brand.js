import express from "express";
const router = express.Router();
import controller from '../controllers/brand.js';
// import { getAll, getById, post, put, remove } from "../controllers/brand.js";

router.get('/all', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.remove);

// router.get("/all", getAll);
// router.get("/:id", getById);
// router.post("/", post);
// router.put("/:id", put);
// router.delete("/:id", remove);

export default router;
