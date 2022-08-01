import Test from './basetest.js'


class TestMenu extends Test {
    static mock = {
        "produto": "produto",
        "valor": 21,
        "descricao": "descricao"
    }
    static describe = "Testando rotas cardapio"
    static rootPath = "/menu"
}

TestMenu.test()