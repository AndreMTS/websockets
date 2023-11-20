import { emitirTextoEditor } from "./socket-front-documento.js";

let editorTexto = document.querySelector("#editor-texto");

editorTexto.addEventListener("keyup", () => {
  emitirTextoEditor(editorTexto.value);
});

function atualizTextoEditor(texto) {
  editorTexto.value = texto;
}

export { atualizTextoEditor };
