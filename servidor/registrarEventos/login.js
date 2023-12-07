import { encontrarUsuario } from "../db/usuariosDb.js";
import autenticarUsuario from "../utils/autenticar.js";
import gerarJwt from "../utils/gerarJwt.js";

function registrarEventosLogin(socket, io) {
  socket.on("autenticar_usuario", async ({ nome, senha }) => {
    const usuario = await encontrarUsuario(nome);

    if (usuario) {
      const autenticado = autenticarUsuario(senha, usuario);

      if (autenticado) {
        const tokenJwt = gerarJwt({ nomeUsuario: nome });

        //console.log(tokenJwt);

        socket.emit("autenticao_sucesso", tokenJwt);
      } else {
        socket.emit("autenticao_error");
      }
    } else {
      socket.emit("usuario_nao_encontrado");
    }
  });
}

export default registrarEventosLogin;
