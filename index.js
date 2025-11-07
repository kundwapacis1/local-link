import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import fileRoutes from "./routes/fileRoutes"

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve uplaoded file
app.use("/api/files", fileRoutes)
// HOME ROUTE




const PORT = process.env.PORT ||  3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
