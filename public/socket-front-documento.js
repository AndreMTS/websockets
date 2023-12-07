import { alertarExcluirDocumento, atualizarTextoEditor } from "./documento.js";

const socket = io("/usuarios", {
  auth: {
    token: obterCookie("tokenJwt"),
  },
});

function selecionarDocumento(nome) {
  socket.emit("selecionar-documento", nome, (texto) => {
    atualizarTextoEditor(texto);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("textoFrontParaBack", dados);
}

socket.on("texto-frontEnd-clientes", (texto) => {
  atualizarTextoEditor(texto);
});

function emitirExluirDocumento(dados) {
  socket.emit("excluir_documento", dados);
}

socket.on("excluir_documento_sucesso", (nomeDocumento) => {
  alertarExcluirDocumento(nomeDocumento);
});

export { emitirTextoEditor, selecionarDocumento, emitirExluirDocumento };
