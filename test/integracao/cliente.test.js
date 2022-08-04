import Test from './basetest.js'


class ClientMenu extends Test {
    static expect;
    static mock = {
        nome: "Jorge",
        telefone: "45698742",
        email: "jorge@mail.com"
    }
    static putAtt={
        nome: "Lucas",
        telefone: "45698742",
        email: "lucas@mail.com"
    }
    static param= "Jorge"
    static describe = "Testando rotas Clientes"
    static rootPath = "/client"
    static paramPath = "/nome/"
    static paramAtt = "Lucas"

    static setDados(dados){
        this.expect = dados.nome
    }
}

ClientMenu.test()
ClientMenu.testDel()