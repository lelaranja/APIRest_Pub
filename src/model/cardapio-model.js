import Validacoes from '../services/validacoes.js'
import ErrosModel from './errors-model.js';

class CardapioModel {
    constructor(requisicao) {
        this.produto = requisicao.produto;
        this.valor = requisicao.valor;
        this.descricao = requisicao.descricao;
    }

    static validateModel(dados){
        return new Promise(async(resolve,reject)=>{
            try{
                if(Validacoes.isNumber(dados.valor)){
                    const newModel = new CardapioModel(dados)
                    await Validacoes.reqIsEmpty(newModel)
                    resolve(newModel)
                } else {
                    reject(
                        new ErrosModel("Dados preenchidos incorretamente",400)
                    )
                }
            } catch(error) {
                reject(error)
            }
        })
    }
}

export default CardapioModel;
