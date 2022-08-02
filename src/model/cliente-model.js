class ClienteModel {
    constructor(requisicao) {
        this.nome = requisicao.nome;
        this.telefone = requisicao.telefone;
        this.email = requisicao.email;
    }
}

export default ClienteModel;