import { atualizTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
  socket.emit("selecionar-documento", nome, (texto) => {
    atualizTextoEditor(texto);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("textoFrontParaBack", dados);
}

socket.on("texto-frontEnd-clientes", (texto) => {
  atualizTextoEditor(texto);
});

export { emitirTextoEditor, selecionarDocumento };
