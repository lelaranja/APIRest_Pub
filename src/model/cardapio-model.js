class CardapioModel {
    constructor(requisicao) {
        this.produto = requisicao.produto;
        this.valor = requisicao.valor;
        this.descricao = requisicao.descricao;
    }
}

export default CardapioModel;