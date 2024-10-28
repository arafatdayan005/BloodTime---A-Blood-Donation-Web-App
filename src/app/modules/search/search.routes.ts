import express from "express";
import { searchController } from "./search.controller";

const router = express.Router();

router.get("/", searchController.donorList);

export const searchRoutes = router;
