import QRcode from "qrcode";

export const generateQRCode = async (text) => {
    try {
        return await qQRCode.toDtaURL(text);
    } catch (err) {
        console.error("QR generation error:", err);
        return null;
    }
};