import Validacoes from "../services/validacoes.js";
import ErrosModel from "../model/errors-model.js";

class TransacaoModel {
  constructor(dados) {
    this.funcionario = dados.funcionario;
    this.produtos = dados.produtos;
    this.valorCompra = dados.valorCompra;
    this.data = `${new Date()}`;
  }

  static validateModel(dados) {
    return new Promise(async(resolve, reject) => {
      try {
        if (
          Validacoes.isString(dados.funcionario) &&
          Validacoes.isString(dados.produtos)
        ) {
          const modelado = new TransacaoModel(dados);
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

export default TransacaoModel;
