import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://andre:alura99*@clustematos0.nwbtwni.mongodb.net/?retryWrites=true&w=majority"
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
