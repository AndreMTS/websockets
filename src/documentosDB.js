import { documentosColecao } from "./dbConnect.js";

function encontrarDocumento(nome) {
    const documento = documentosColecao.findOne({ 
        nome
     });
    return documento;
  }

  function atualizarDocumento (nome, texto) {
    const atualiza = documentosColecao.updateOne({
      nome: nome
    },{
      $set: {
        texto: texto
      }
    }
    )
    return atualiza;
  }
  
  export {encontrarDocumento, atualizarDocumento}
  

