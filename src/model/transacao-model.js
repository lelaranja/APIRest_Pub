class TransacaoModel {
  constructor(funcionario, produtos, valorCompra) {
    this.funcionario = funcionario;
    this.produtos = produtos;
    this.valorCompra = valorCompra;
    this.data = new Date()
  }
}

export default TransacaoModel;
