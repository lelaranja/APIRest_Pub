class EstoqueModel{
    constructor(data){
        this.id = id++;
        this.fabricante = data.fabricante;
        this.qtdProdutos = data.qtdProdutos;
        this.nomeProduto = data.nomeProduto;
    }
}

export default EstoqueModel;