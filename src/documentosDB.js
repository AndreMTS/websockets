import { documentosColecao } from "./dbConnect.js";

function obterDocumentos() {
  const documentos = documentosColecao.find().toArray();
  return documentos;
}

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
    nome,
  });
  return documento;
}

function excluirDocumento(nome) {
  const resutado = documentosColecao.deleteOne({ nome: nome });

  return resutado;
}

function adicionarDocumento(nome) {
  const res = documentosColecao.insertOne({
    nome,
    texto: "",
  });

  return res;
}

function atualizarDocumento(nome, texto) {
  const atualiza = documentosColecao.updateOne(
    {
      nome: nome,
    },
    {
      $set: {
        texto: texto,
      },
    }
  );
  return atualiza;
}

export {
  encontrarDocumento,
  atualizarDocumento,
  obterDocumentos,
  adicionarDocumento,
  excluirDocumento,
};
