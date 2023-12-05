import { log } from "console";
import {
  encontrarDocumento,
  atualizarDocumento,
  obterDocumentos,
  adicionarDocumento,
  excluirDocumento,
} from "./documentosDB.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  socket.on("obterDocumentos", async (devolverDocumentos) => {
    const documentos = await obterDocumentos();
    devolverDocumentos(documentos);
  });

  socket.on("adicionarDocumento", async (nomeDocumento) => {
    const ExisteDocumento = (await encontrarDocumento(nomeDocumento)) !== null;

    if (ExisteDocumento) {
      socket.emit(`documento_existente`, nomeDocumento);
    } else {
      const resutado = await adicionarDocumento(nomeDocumento);
      if (resutado.acknowledged) {
        io.emit("adicionarDocumentoInterface", nomeDocumento);
      }
    }
  });

  socket.on("selecionar-documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);
    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  socket.on("excluir_documento", async (nomeDocumentoExcluir) => {
    const resultado = await excluirDocumento(nomeDocumentoExcluir);
    console.log(resultado);
    if (resultado.deletedCount) {
      io.emit("excluir_documento_sucesso", nomeDocumentoExcluir);
    }
  });

  socket.on("textoFrontParaBack", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizarDocumento(nomeDocumento, texto);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto-frontEnd-clientes", texto);
    }
  });
});
