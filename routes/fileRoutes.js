import express from "express";
import { uploadFile, getFiles, downloadFile} from "../controllers/fileControllers";
import upload from "../middleware/uploadMiddleware";

const router  = express.Router();

router.post("upload", upload.single("file"), uploadFile);
router.get("/", getFiles);
router.get("/download/:id", downloadFile);
 export default router;