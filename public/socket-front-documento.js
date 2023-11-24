import { atualizTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
  socket.emit("selecionar-documento", nome);
}

function emitirTextoEditor(texto) {
  socket.emit("textoFrontParaBack", texto);
}

socket.on("texto-frontEnd-clientes", (texto) => {
  atualizTextoEditor(texto);
});

export { emitirTextoEditor, selecionarDocumento };
