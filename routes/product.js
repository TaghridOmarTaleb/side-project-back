import express from "express";
const router = express.Router();
import controller from "../controllers/product.js";
import authorization from "../middelware/authorization.js";
import admin from "../middelware/admins.js";
import upload from "../middelware/multer.js";

router.get("/all", controller.getAll);
router.get("/", controller.get);
router.get("/:id", controller.getById);
router.put("/:id", authorization, admin, controller.put);
router.put("/soft/:id", authorization, admin, controller.softDelete);
router.delete("/:id", authorization, admin, controller.deleteProduct);
router.post("/", authorization, admin, upload.single("image"), controller.post);

export default router;
