import { emitAdicionarDocumento } from "./socket-front-index.js";

const listaDocumento = document.querySelector("#lista-documentos");
const formAdicionaDocumento = document.querySelector(
  "#form-adiciona-documento"
);
const inputDocumento = document.querySelector("#input-documento");

formAdicionaDocumento.addEventListener("submit", (e) => {
  e.preventDefault();

  emitAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = "";
});

function inserirLinkDocumento(nomeDocumento) {
  listaDocumento.innerHTML += `
    <a href="documento.html?nome=${nomeDocumento}" 
       class="list-group-item list-group-item-action"
       id="documento-${nomeDocumento}"
       >
            ${nomeDocumento}
    </a>
  `;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.querySelector(`#documento-${nomeDocumento}`);

  listaDocumento.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };
