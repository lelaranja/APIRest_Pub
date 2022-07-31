import ErrosModel from "../model/errors-model.js";

class Validacoes {
  static isEmpty(dados) {
    if ((!dados) || (dados.length <= 0)) return true;
    else return false;
  }

  static reqIsEmpty(dados){
    return new Promise((resolve, reject) => {
        if(!this.someDataIsEmpty(dados)){
            reject(new ErrosModel ("Parece que faltam alguns dados em sua requisição", 401))
        } else {
            resolve()
        }
    })
  }

  static someDataIsEmpty(dados) {
    return Object.values(dados).every((value) => {
      if (value) {
        return true;
      }
      return false;
    });
  }

  static notInBank(dados){
    return new Promise((resolve,reject) => {
      if (dados.status === 404) reject()
      else resolve()

    })
  }
}

export default Validacoes;
