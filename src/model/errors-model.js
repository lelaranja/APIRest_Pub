class ErrosModel {
  constructor(msg, status, erro) {
    this.msg = {
      msg: msg,
      erro: erro
    }
    this.status = status
  }
}

export default ErrosModel