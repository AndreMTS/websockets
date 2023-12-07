const socket = io();

function emitirAutenticarUsuario(dados) {
  socket.emit("autenticar_usuario", dados);
}

socket.on("autenticao_sucesso", () => {
  alert("Usuario Autenticado com sucesso!!");
  window.location.href = "/";
});
socket.on("autenticao_error", () => {
  alert("Erro ao autenticar usuario!!");
});
socket.on("usuario_nao_encontrado", () => {
  alert("Usuario não encontrado!!");
});

export { emitirAutenticarUsuario };
