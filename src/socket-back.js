import { encontrarDocumento, atualizarDocumento } from "./documentosDB.js";
import io from "./servidor.js";



io.on("connection", (socket) => {
  console.log(`Um cliente se conectou! ${socket.id}`);

  socket.on("selecionar-documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);
    const documento = await encontrarDocumento(nomeDocumento);

    console.log(documento);

    if (documento) {
      devolverTexto(documento.texto);
    }
  });


  socket.on("textoFrontParaBack", async ({ texto, nomeDocumento }) => {
    
    const atualizacao = await atualizarDocumento(nomeDocumento, texto);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto-frontEnd-clientes", texto);
    }

  });

});

