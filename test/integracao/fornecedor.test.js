import Test from './basetest.js'


class TestSupplier extends Test {
    static expect;
    static mock = {
        nome: "Empresa",
        telefone: "1",
        cnpj: "2",
        produto: "Cerveja"
    }
    static putAtt = {
        nome: "Empresa1",
        telefone: "1",
        cnpj: "23",
        produto: "Breja"
    }
    static param = "2"
    static describe = "Testando rotas fornecedor"
    static rootPath = "/suppliers"
    static paramPath = "/cnpj/"
    static paramAtt = "23"

    static setDados(dados) {
        console.log(dados);
        this.expect = dados.cnpj
    }
}

TestSupplier.test()
TestSupplier.testDel()