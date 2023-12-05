const socket = io();

function emitirCadastrarUsuario(dadosUsuarios) {
  socket.emit("cadastrar_usuario", dadosUsuarios);
}

socket.on("cadastrar_sucesso", () => {
  alert("Cadastro realizado com sucesso!");
});
socket.on("cadastrar_erro", () => {
  alert("erro ao realizada cadastro!");
});
socket.on("usuario_ja_existente", () => {
  alert("usuario ja existente!");
});

export { emitirCadastrarUsuario };
