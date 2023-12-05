import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDb.js";

function registrarEventosCadastro(socket, io) {
  socket.on("cadastrar_usuario", async (dados) => {
    const usuario = await encontrarUsuario(dados.nome);

    if (usuario === null) {
      const resutado = await cadastrarUsuario(dados);

      if (resutado.acknowledged) {
        socket.emit("cadastrar_sucesso");
      } else {
        socket.emit("cadastrar_erro");
      }
    } else {
      socket.emit("usuario_ja_existente");
    }
  });
}
export default registrarEventosCadastro;
