import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.post("/signin", userController.userSignIn);
router.post("/signup", userController.userSignUp);

export default router;
