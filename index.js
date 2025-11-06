import express from 'express';
import QRCode from "qrcode";
import multer from "multer";
import path from "path";

const app = express();
app.use(express.json());

// HOME ROUTE

app.get("/", (req, res) =>{
    res.send("✅ QR Code Generator API IS RUNNING!");
});


const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
