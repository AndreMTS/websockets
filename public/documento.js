const socket = io();

let texto = document.querySelector("#editor-texto");
texto.addEventListener("keyup", () => {
  socket.emit("texto-frontend", texto.value);
});
