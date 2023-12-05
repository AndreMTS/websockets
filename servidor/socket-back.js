import io from "./servidor.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";

io.on("connection", (socket) => {
  registrarEventosDocumento(socket, io);
  registrarEventosInicio(socket, io);
  registrarEventosCadastro(socket, io);
});
