class ClienteModel {
    constructor(requisicao) {
        this.nome = requisicao.nome;
        this.telefone = requisicao.telefone;
        this.descricao = requisicao.email;
    }
}

export default ClienteModel;