import Test from './basetest.js'


class TestMenu extends Test {
    static mock = {
        "produto": "produto",
        "valor": 21,
        "descricao": "descricao"
    }
    static putAtt={
        "produto": "prod",
        "valor": 22,
        "descricao": "descricao"
    }
    static describe = "Testando rotas cardapio"
    static rootPath = "/menu"
    static paramPath = "/produto/"
}

TestMenu.test()