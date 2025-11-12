import { generateQR } from "./qr-generator.js";

const socket = io("http://localhost:3000"); // Connect to backend
const joinBtn = document.getElementById("joinBtn");
const roomInput = document.getElementById("roomInput");
const roomSection = document.getElementById("room-section");
const roomNameDisplay = document.getElementById("roomName");

const roomFileInput = document.getElementById("roomFileInput");
const roomUploadBtn = document.getElementById("roomUploadBtn");
const roomFiles = document.getElementById("roomFiles");

const roomTextInput = document.getElementById("roomTextInput");
const roomSendTextBtn = document.getElementById("roomSendTextBtn");
const roomTexts = document.getElementById("roomTexts");

let currentRoom = "";

// Join Room
joinBtn.addEventListener("click", () => {
  if (!roomInput.value) return alert("Enter a room name");
  currentRoom = roomInput.value;
  socket.emit("joinRoom", currentRoom);
  roomSection.style.display = "block";
  roomNameDisplay.innerText = `Room: ${currentRoom}`;
});

// Receive file message
socket.on("fileShared", (data) => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${data.url}" target="_blank">${data.name}</a>`;
  roomFiles.appendChild(li);
  generateQR(data.url);
});

// Receive text message
socket.on("textShared", (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  roomTexts.appendChild(li);
});

// Upload file
roomUploadBtn.addEventListener("click", async () => {
  if (!roomFileInput.files[0]) return alert("Select a file");
  const formData = new FormData();
  formData.append("file", roomFileInput.files[0]);
  formData.append("room", currentRoom);

  const res = await fetch("http://localhost:3000/api/files/room", {
    method: "POST",
    body: formData
  });
  const data = await res.json();
  socket.emit("shareFile", { room: currentRoom, url: data.fileUrl, name: data.filename });
});

// Send text
roomSendTextBtn.addEventListener("click", () => {
  if (!roomTextInput.value) return;
  socket.emit("shareText", { room: currentRoom, text: roomTextInput.value });
  roomTextInput.value = "";
});
