import io from "./servidor.js";

const documentos = [
  {
    nome: "JavaScript",
    texto: "",
  },
  {
    nome: "Node",
    texto: "",
  },
  {
    nome: "Socket.io",
    texto: "",
  },
];

io.on("connection", (socket) => {
  console.log(`Um cliente se conectou! ${socket.id}`);

  socket.on("selecionar-documento", (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);
    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  socket.on("textoFrontParaBack", ({ texto, nomeDocumento }) => {
    const documento = encontrarDocumento(nomeDocumento);
    if (documento) {
      documento.texto = texto;
      socket.to(nomeDocumento).emit("texto-frontEnd-clientes", texto);
    }
  });
});

function encontrarDocumento(nome) {
  const documento = documentos.find((documento) => {
    return documento.nome === nome;
  });

  return documento;
}
