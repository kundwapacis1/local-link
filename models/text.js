import mongoose from "mongoose";
const textSchema = new mongoose.Schema({
    content: {
        type: String, 
        required: true ,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export default mongoose.model("Text", textSchema);