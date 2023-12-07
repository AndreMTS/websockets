import { encontrarUsuario } from "../db/usuariosDb.js";
import autenticarUsuario from "../utils/autenticar.js";

function registrarEventosLogin(socket, io) {
  socket.on("autenticar_usuario", async ({ nome, senha }) => {
    const usuario = await encontrarUsuario(nome);

    if (usuario) {
      const autenticado = autenticarUsuario(senha, usuario);

      if (autenticado) {
        socket.emit("autenticao_sucesso");
      } else {
        socket.emit("autenticao_error");
      }
    } else {
      socket.emit("usuario_nao_encontrado");
    }
  });
}

export default registrarEventosLogin;
