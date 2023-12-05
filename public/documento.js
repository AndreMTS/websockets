import {
  emitirTextoEditor,
  selecionarDocumento,
  emitirExluirDocumento,
} from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

let tituloDocumento = document.querySelector("#titulo-documento");
tituloDocumento.textContent = nomeDocumento || "Documento sem titulo";
let excluirDocumento = document.querySelector("#excluir-documento");

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

excluirDocumento.addEventListener("click", () => {
  emitirExluirDocumento(nomeDocumento);
});

function alertarExcluirDocumento(nomeDocumentoExcluir) {
  if (nomeDocumentoExcluir === nomeDocumento) {
    alert(`Documento ${nomeDocumentoExcluir} excluido!!`);
    window.location.href = "/";
  }
}

export { atualizarTextoEditor, alertarExcluirDocumento };
