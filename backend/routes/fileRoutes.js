import express from "express";
import multer from "multer";
import { uploadFile, getFiles, downloadFile} from "../controllers/fileControllers.js";
import upload from "../middleware/uploadMiddleware.js";

const router  = express.Router();

router.post("upload", upload.single("file"), uploadFile);
router.get("/", getFiles);
router.get("/download/:id", downloadFile);
 export default router;