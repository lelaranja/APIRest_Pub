import Validacoes from "../services/validacoes.js";
import ErrosModel from "../model/errors-model.js";

class StorageModel{
    constructor(data){
        this.fabricante = data.fabricante;
        this.qtdProdutos = data.qtdProdutos;
        this.nomeProduto = data.nomeProduto;
    }

    static ValidateModel(dados){
        return new Promise(async (resolve, reject) => {
        try {
            if (Validacoes.isString(dados.fabricante) && Validacoes.isString(dados.nomeProduto) && Validacoes.isNumber(dados.qtdProdutos)) {
                const modelado = new StorageModel(dados)
                await Validacoes.reqIsEmpty(modelado)
                resolve(modelado)
            } else {
                reject(new ErrosModel("Alguns dados estão preenchidos incorretamente", 400))
            }
        } catch (error) {
            reject(error)
        }
    })
}
}

export default StorageModel;