import ErrosModel from "../model/errors-model.js";

class Validacoes {
  static isEmpty(dados) {
    if (!dados) return true;
    else return false;
  }

  static reqIsEmpty(dados){
    return new Promise((resolve, reject) => {
        if(!this.someDataIsEmpty(dados)){
            console.log(res)
            reject(new ErrosModel ("Parece quue faltam alguns dados em sua requisição", 401))
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
}

export default Validacoes;
