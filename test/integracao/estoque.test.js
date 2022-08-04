import Test from './basetest.js'


class TestStorage extends Test {
    static expect;
    static mock = {
        "fabricante": "ambev",
        "qtdProdutos": 210,
        "nomeProduto": "pepsi"
    }
    static putAtt={
        "fabricante": "pepsico",
        "qtdProdutos": 21,
        "nomeProduto": "doritos"
    }
    static param= "pepsi"
    static describe = "Testando rotas estoque"
    static rootPath = "/storage"
    static paramPath = "/nomeProduto/"
    static paramAtt = "doritos"

    static setDados(dados){
        this.expect = dados.nomeProduto
    }
}

TestStorage.test()
TestStorage.testDel()