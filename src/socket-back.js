import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log(`Um cliente se conectou! ${socket.id}`);
  socket.on("texto-frontend", (texto) => {
    console.log(texto);
  });
});
