import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.get("/users", userController.userLogin);

export default router;
