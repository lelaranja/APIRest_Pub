import Test from './basetest.js'


class TestSupplier extends Test {
    static expect;
    static mock = {
        nome: "Empresa",
        telefone: "11111111111",
        cnpj: "11111111111111",
        produto: "Cerveja"
    }
    static putAtt = {
        nome: "Empresa1",
        telefone: "11111111111",
        cnpj: "11111111111112",
        produto: "Breja"
    }
    static param = "11111111111111"
    static describe = "Testando rotas fornecedor"
    static rootPath = "/suppliers"
    static paramPath = "/cnpj/"
    static paramAtt = "11111111111112"

    static setDados(dados) {
        this.expect = dados.cnpj
    }
}

TestSupplier.test()
TestSupplier.testDel()