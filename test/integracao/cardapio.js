import Test from './basetest.js'


class TestMenu extends Test {
    static expect;
    static mock = {
        "produto": "cerveja",
        "valor": 21,
        "descricao": "descricao"
    }
    static putAtt={
        "produto": "breja",
        "valor": 22,
        "descricao": "descricao"
    }
    static param= "cerveja"
    static describe = "Testando rotas cardapio"
    static rootPath = "/menu"
    static paramPath = "/produto/"
    static paramAtt = "breja"

    static setDados(dados){
        this.expect = dados.produto
    }
}

TestMenu.test()