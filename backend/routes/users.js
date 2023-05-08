import express from "express";
import { getUser } from "../controllers/user.js";

const router = express.Router();

// backend/find/:userId/ will find a specific user here using the userId

router.get("/find/:userId", getUser);

export default router;
