import { emitirAutenticarUsuario } from "./socket-front-login.js";
import { obterCookie } from "./utils/cookies.js";

const tokenJwt = obterCookie("tokenJwt");
console.log(tokenJwt);

const form = document.querySelector("#form-login");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = form["input-usuario"].value;
  const senha = form["input-senha"].value;

  emitirAutenticarUsuario({ nome, senha });
});
