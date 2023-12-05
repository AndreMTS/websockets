import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://andre:alura99*@clustematos0.nwbtwni.mongodb.net/?retryWrites=true&w=majority"
);

let documentosColecao;

try {
  await client.connect();

  const db = client.db("alura-websockets");

  documentosColecao = db.collection("documentos");

  //console.log('Conectado com sucesso');
} catch (error) {
  console.log(error);
}

export { documentosColecao };
