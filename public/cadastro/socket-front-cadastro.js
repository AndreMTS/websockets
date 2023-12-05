const socket = io();

function emitirCadastrarUsuario(dadosUsuarios) {
  socket.emit("cadastrar_usuario", dadosUsuarios);
}

export { emitirCadastrarUsuario };
