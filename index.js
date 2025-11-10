import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import fileRoutes from "./routes/fileRoutes.js"
import textRoutes from "./routes/textRoutes.js";

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve uplaoded file
app.use("/api/files", fileRoutes)
app.use("/api/text", textRoutes);
// HOME ROUTE




const PORT = process.env.PORT ||  3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
