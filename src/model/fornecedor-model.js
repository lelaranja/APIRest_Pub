import Validacoes from "../services/validacoes.js";
import ErrosModel from "./errors-model.js";

class SuppliersModel {
  constructor(dados) {
    this.nome = dados.nome;
    this.telefone = dados.telefone;
    this.cnpj = dados.cnpj;
    this.produto = dados.produto;
  }

  static validateModel(dados) {
    return new Promise(async (resolve, reject) => {
      try {
        if (
          Validacoes.isString(dados.nome) &&
          Validacoes.isString(dados.produto) &&
          Validacoes.isCNPJ(dados.cnpj) &&
          Validacoes.isCell(dados.telefone)
        ) {
          const modelado = new SuppliersModel(dados);
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


export default SuppliersModel;