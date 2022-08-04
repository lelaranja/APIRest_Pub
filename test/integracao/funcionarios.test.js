import Test from './basetest.js'


class TestStaff extends Test {
    static expect;
    static mock = {
        "nome": "Digo",
        "cpf": "22222222233",
        "datadenascimento": "17/11/20"
    }
    static putAtt={
        "nome": "Digo",
        "cpf": "22222222233",
        "datadenascimento": "17/11/22"
    }
    static param= "Digo"
    static describe = "Testando rotas funcionarios"
    static rootPath = "/staff"
    static paramPath = "/nome/"
    static paramAtt = "Digo"

    static setDados(dados){
        this.expect = dados.nome
    }
}

TestStaff.test()
TestStaff.testDel()