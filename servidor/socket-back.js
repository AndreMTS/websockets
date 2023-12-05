import registrarEventosInicio from "./registrarEventos/registrarEventosInicio.js";
import registrarEventosDocumento from "./registrarEventos/registratEventosDocumento.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  registrarEventosDocumento(socket, io);
  registrarEventosInicio(socket, io);
});
