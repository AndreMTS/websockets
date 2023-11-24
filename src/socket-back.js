import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log(`Um cliente se conectou! ${socket.id}`);

  socket.on("selecionar-documento", (nomeDocumento) => {
    socket.join(nomeDocumento);
  });

  socket.on("textoFrontParaBack", (texto) => {
    socket.broadcast.emit("texto-frontEnd-clientes", texto);
  });
});
