import Validacoes from "../services/validacoes.js";
import ErrosModel from "../model/errors-model.js";

class TransactionsModel {
  constructor(dados) {
    this.funcionario = dados.funcionario;
    this.produtos = dados.produtos;
    this.valorCompra = dados.valorCompra;
    this.data = `${new Date()}`;
  }

  static validateModel(dados) {
    return new Promise(async (resolve, reject) => {
      try {
        if (
          Validacoes.isString(dados.funcionario) &&
          Validacoes.isString(dados.produtos) &&
          Validacoes.isNumber(dados.valorCompra)
        ) {
          const modelado = new TransactionsModel(dados);
          await Validacoes.reqIsEmpty(modelado);
          resolve(modelado);
        } else
          reject(
            new ErrosModel("Alguns dados estão preenchidos incorretamente", 400)
          );
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default TransactionsModel;