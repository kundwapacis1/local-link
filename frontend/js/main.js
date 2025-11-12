import { generateQR } from "./qr-generator.js";

const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const fileResult = document.getElementById("fileResult");

uploadBtn.addEventListener("click", async () => {
  if (!fileInput.files[0]) return alert("Select a file first");
  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  const res = await fetch("http://localhost:3000/api/files", {
    method: "POST",
    body: formData
  });
  const data = await res.json();
  fileResult.innerHTML = `File URL: <a href="${data.fileUrl}" target="_blank">${data.fileUrl}</a>`;

  generateQR(data.fileUrl); // generate QR for file
});

// Text sharing
const textInput = document.getElementById("textInput");
const saveTextBtn = document.getElementById("saveTextBtn");
const textList = document.getElementById("textList");

async function fetchTexts() {
  const res = await fetch("http://localhost:3000/api/text");
  const texts = await res.json();
  textList.innerHTML = texts.map(t => {
    const li = document.createElement("li");
    li.innerHTML = `${t.content} <button onclick="generateQR('${window.location.origin}/text/${t._id}')">QR</button>`;
    return li.outerHTML;
  }).join("");
}

saveTextBtn.addEventListener("click", async () => {
  if (!textInput.value) return alert("Type something");
  await fetch("http://localhost:3000/api/text", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: textInput.value })
  });
  textInput.value = "";
  fetchTexts();
});

fetchTexts();
