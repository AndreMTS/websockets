import { inserirLinkDocumento, removerLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obterDocumentos", (documentos) => {
  documentos.forEach((documento) => {
    inserirLinkDocumento(documento.nome);
  });
});

function emitAdicionarDocumento(documento) {
  socket.emit("adicionarDocumento", documento);
}

socket.on("adicionarDocumentoInterface", (nomeDocumento) => {
  inserirLinkDocumento(nomeDocumento);
});

socket.on("documento_existente", (nomeDocumento) => {
  alert(`O documento ${nomeDocumento} já existe!`);
});

socket.on("excluir_documento_sucesso", (nomeDocumento) => {
  removerLinkDocumento(nomeDocumento);
});

export { emitAdicionarDocumento };
