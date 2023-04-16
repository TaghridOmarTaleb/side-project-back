import express from "express";
const router = express.Router();
import controller from "../controllers/user.js";
import authorization from "../middelware/authorization.js";
import admin from "../middelware/admins.js";
import superAdmin from "../middelware/superAdmin.js";

router.get("/all", authorization, admin, superAdmin, controller.getAll);
router.get("/me", authorization, admin, superAdmin, controller.get);
router.get("/:id", authorization, admin, superAdmin, controller.getById);
router.post("/", authorization, admin, superAdmin, controller.post);
router.delete("/:id", authorization, admin, superAdmin, controller.deleteUser);

export default router;
