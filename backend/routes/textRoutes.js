import express from "express";
import { shareText, getTextById } from "../controllers/textControllers.js";

const router = express.Router();


router.post("/share", shareText);
router.get("/:id", getTextById);


export default router