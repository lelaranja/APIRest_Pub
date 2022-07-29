import DB from "../database/db-sqlite.js";

class DAO {
  //esse metodo pega todos os dados do seu banco de dados, basta em sua classe filha.
  static pegaTodosDados() {
    return new Promise((resolve, reject) => {
      DB.all(this.querySelectAll, (erro, linhas) => {
        if (erro) {
          reject({
            msg: erro.message,
            erro: true,
          });
        } else {
          resolve({
            resultado: linhas,
            erro: false,
          });
        }
      });
    });
  }
  static pegaUmDado(comparador) {
    return new Promise((resolve, reject) => {
      DB.get(this.querySelect, comparador, (erro, linhas) => {
        if (erro) {
          reject({
            //parei aqui, to tentando retornar os erros e estourar aqui na promisses o erro
          });
        } else {
          resolve({
            resultado: linhas,
            erro: false,
          });
        }
      });
    });
  }
  static inserirDados(dados) {
    return new Promise((resolve, reject) => {
      DB.run(this.queryInsert, ...Object.values(dados), (erro) => {
        if (erro) {
          reject({
            msg: erro.message,
            erro: true,
          });
        } else {
          resolve({
            resultado: `Dados inseridos com sucesso`,
            erro: false,
          });
        }
      });
    });
  }
  static atualizarDado(dados, comparador) {
    return new Promise((resolve, reject) => {
      DB.run(this.queryUpdate, ...Object.values(dados), comparador, (erro) => {
        if (erro) {
          reject({
            msg: erro.message,
            erro: true,
          });
        } else {
          resolve({
            resultado: `Dados atualizados com sucesso onde parametro = ${comparador}`,
            erro: false,
          });
        }
      });
    });
  }
  static deletaDado(parametro) {
    return new Promise((resolve, reject) => {
      DB.run(this.queryDelete, parametro, (erro) => {
        if (erro) {
          reject({
            msg: erro.message,
            erro: true,
          });
        } else {
          resolve({
            resultado: `Dados deletados com sucesso onde parametro = ${parametro}`,
            erro: false,
          });
        }
      });
    });
  }
}

export default DAO;
