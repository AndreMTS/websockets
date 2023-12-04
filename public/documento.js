import {
  emitirTextoEditor,
  selecionarDocumento,
} from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

let tituloDocumento = document.querySelector("#titulo-documento");
tituloDocumento.textContent = nomeDocumento || "Documento sem titulo";

selecionarDocumento(nomeDocumento);

let editorTexto = document.querySelector("#editor-texto");

editorTexto.addEventListener("keyup", () => {
  emitirTextoEditor({
    texto: editorTexto.value,
    nomeDocumento,
  });
});

function atualizarTextoEditor(texto) {
  editorTexto.value = texto;
}

export { atualizarTextoEditor };
