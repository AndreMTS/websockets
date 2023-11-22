import { emitirTextoEditor } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

let tituloDocumento = document.querySelector("#titulo-documento");
tituloDocumento.textContent = nomeDocumento || "Documento sem titulo";

let editorTexto = document.querySelector("#editor-texto");

editorTexto.addEventListener("keyup", () => {
  emitirTextoEditor(editorTexto.value);
});

function atualizTextoEditor(texto) {
  editorTexto.value = texto;
}

export { atualizTextoEditor };
