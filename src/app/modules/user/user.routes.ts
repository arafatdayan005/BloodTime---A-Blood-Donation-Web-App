import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/", userController.registerUser);

export const userRoutes = router;
