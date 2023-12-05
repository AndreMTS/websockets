import { emitirCadastrarUsuario } from "./socket-front-cadastro.js";

const form = document.querySelector("#form-cadastro");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const usuario = form["input-usuario"].value;
  const senha = form["input-senha"].value;

  emitirCadastrarUsuario({ usuario, senha });
  console.log(usuario, senha);
});
