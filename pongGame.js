const canvas = document.querySelector("#pong");
const context = canvas.getContext("2d");

// Background color
context.fillStyle = "#000";
context.fillRect(0, 0, canvas.clientWidth, canvas.height);

// Ball color
context.fillStyle = "#fff";
context.fillRect(0, 0, 10, 10);
