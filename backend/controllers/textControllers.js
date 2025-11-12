import Text from "../models/text.js";
import QRCode from "qrcode";

// share text (create)
export const shareText = async (req, res) =>{
    try {
        const {content} = req.body;
        if (!content) return res.status(400).json({ message: "Text content is requires"});

        const newText = await Text.create({ content});
    
    const link = `${process.env.BASE_URL}/api/text/${newText._id}`;
    const qrCode = await QRCode.toDataURL(link);

    res.json({
      message: "Text shared successfully",
      link,
      qrCode,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get shared text by ID
export const getTextById = async (req, res) => {
  try {
    const text = await Text.findById(req.params.id);
    if (!text) {
      return res.status(404).json({ message: "Text not found" });
    }
    res.json(text);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

