import Test from './basetest.js'


class TestTransactions extends Test {
    static expect;
    static mock = {
        "funcionario" : "Flavio Mustang",
        "produtos" : "Carne",
        "valorCompra": 1400
    }
    static param = 1
    static putAtt= {
        "funcionario" : "Bruno",
        "produtos" : "Figado com cebola",
        "valorCompra" : 5000
    }

    static describe = "Testando rotas transactions"
    static rootPath = "/transactions"
    static paramPath = "/id/"
    static paramAtt = 1


    static setDados(dados){
        this.expect = dados.id
    }
    static getParam(){
        return this.param
    }
    static getParamAtt(){
        return this.paramAtt
    }
    static nextTestPossible(){
        this.param = this.param + 1
        this.paramAtt = this.paramAtt + 1 
    }
}

TestTransactions.test()
TestTransactions.nextTestPossible()