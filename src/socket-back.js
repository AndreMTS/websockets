import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log(`Um cliente se conectou! ${socket.id}`);
  socket.on("textoFrontParaBack", (texto) => {
    //console.log(texto);

    socket.broadcast.emit("texto-frontEnd-clientes", texto);
  });
});
