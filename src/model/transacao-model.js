class TransacaoModel {
  constructor(dados) {
    this.funcionario = dados.funcionario
    this.produtos = dados.produtos
    this.valorCompra = dados.valorCompra
    this.data = `${new Date()}`
  }
}

export default TransacaoModel;
