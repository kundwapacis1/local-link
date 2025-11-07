import express from "express";
import { uploadFile } from "../controllers/fileControllers";
import upload from "../middleware/uploadMiddleware";

const router  = express.Router();

router.post("upload", upload.single("file"), uploadFile);
 export default router;