import DB from "../database/db-sqlite.js";
import ErrosModel from "../model/errors-model.js";
import Validacoes from "../services/valida-base.js";

class DAO {

  //esse metodo pega todos os dados do seu banco de dados, basta em sua classe filha.
  
  static pegaTodosDados() {
    return new Promise((resolve, reject) => {
      DB.all(this.querySelectAll, (erro, linhas) => {
        if (erro) {
          reject(new ErrosModel("Erro desconhecido", 500, erro));
        } else if (Validacoes.isEmpty(linhas)) {
          reject(new ErrosModel("Dados não encontrados", 404));
        } else {
          resolve({
            resultado: linhas,
            erro: false,
          });
        }
      });
    });
  } 
  
  //finalizado

  static pegaUmDado(comparador) {
    return new Promise((resolve, reject) => {
      DB.get(this.querySelect, comparador, (erro, linhas) => {
        if (erro) {
          reject(new ErrosModel("Erro desconhecido", 500, erro));
        } else if (Validacoes.isEmpty(linhas)) {
          reject(new ErrosModel("Dados não encontrados", 404));
        } else {
          resolve({
            resultado: linhas,
            status: 200,
          });
        }
      });
    });
  }

  static inserirDados(dados) {
    return new Promise((resolve, reject) => {
      DB.run(this.queryInsert, ...Object.values(dados), (erro) => {
        if (erro) {
          reject(new ErrosModel("Erro desconhecido", 500, erro));
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
          reject(new ErrosModel("Erro desconhecido", 500, erro));
        } else {
          resolve({
            resultado: `Dados atualizados com sucesso onde id = ${comparador}`,
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
          reject(new ErrosModel("Erro desconhecido", 500, erro));
        } else {
          resolve({
            resultado: `Dados deletados com sucesso onde id = ${parametro}`,
            erro: false,
          });
        }
      });
    });
  }
}

export default DAO;
