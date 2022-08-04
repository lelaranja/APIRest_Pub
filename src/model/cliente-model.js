import Validacoes from "../services/validacoes.js";
import ErrosModel from "../model/errors-model.js";

class ClienteModel {
    constructor(dados) {
        this.nome = dados.nome;
        this.telefone = dados.telefone;
        this.email = dados.email;
    }

    static validateModel(dados) {
        return new Promise(async(resolve, reject) => {
          try {
            if (
              Validacoes.isString(dados.nome) &&
              Validacoes.isString(dados.email)
            ) {
              const modelado = new ClienteModel(dados);
              await Validacoes.reqIsEmpty(modelado);
              resolve(modelado);
            } else
              reject(
                new ErrosModel("Alguns dados estão preenchidos incorretamente", 400)
              );
          } catch (error) {
            reject(error)
          }
        });
      }
}

export default ClienteModel;

