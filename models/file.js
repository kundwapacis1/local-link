import mongoose from "mongoose";

const filesSchema = new mongoose.Schema({
    filename: String,
    path: String,
    size: Number,
    uploadDate: { type: Date, default: Date.now}
});

export default mongoose.model("File", fileSchema);