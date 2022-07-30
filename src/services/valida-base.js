import ErrosModel from "../model/errors-model.js";

class Validacoes {
  static isEmpty(dados) {
    if (!dados) return true;
    else return false;
  }

  static validBody(dados) {
    console.log(dados);
    return new Promise((resolve, reject) => {
      Object.values(dados).map(value => {
        if (value === undefined) 
          reject(
            new ErrosModel(
              "Parece que falta algum dado em sua requisição...",
              400
            ));
    });
    resolve()
    });
  }
}

export default Validacoes;
