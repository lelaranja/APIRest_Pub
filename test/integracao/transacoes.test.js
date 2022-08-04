import Test from "./basetest.js";

class TestTransactions extends Test {
  static expect;
  static mock = {
    funcionario: "Flavio Mustang",
    produtos: "Carne",
    valorCompra: 14.0,
  };
  static putAtt = {
    funcionario: "Bruno",
    produtos: "Figado com cebola",
    valorCompra: 50.0,
  };

  static param = 2;
  static describe = "Testando rotas transações";
  static rootPath = "/transactions";
  static paramPath = "/id/";
  static paramAtt = 2;

  static setDados(dados) {
    this.expect = dados.id;
  }
}

TestTransactions.test();