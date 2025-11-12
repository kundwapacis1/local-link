import QRCode from "https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js";

export function generateQR(text) {
  const canvas = document.getElementById("qrCanvas");
  QRCode.toCanvas(canvas, text, { width: 200 }, (error) => {
    if (error) console.error(error);
    console.log("QR code generated!");
  });
}
