import { obterCookie, removerCookie } from "./login/utils/cookies.js";
import { emitirAdicionarDocumento } from "./socket-front-index.js";

const tokenJwt = obterCookie("tokenJwt");
console.log(tokenJwt);

const botaoLogout = document.getElementById("botao-logout");

botaoLogout.addEventListener("click", () => {
  removerCookie("tokenJwt");
  alert("Usuario deslogado com sucesso!");
  window.location.href = "/login/index.html";
});

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = "";
});

function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
    <a
      href="/documento/index.html?nome=${nomeDocumento}"
      class="list-group-item list-group-item-action"
      id="documento-${nomeDocumento}"
    >
      ${nomeDocumento}
    </a>
  `;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`documento-${nomeDocumento}`);

  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };
