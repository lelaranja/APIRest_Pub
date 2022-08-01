import DAO from './base-dao.js';

class EstoqueDao extends DAO{
    static querySelectorAll = "SELECT * FROM ESTOQUE"
    static querySelect = "SELECT * FROM ESTOQUE WHERE id = ?"
    static queryInsert = "INSERT INTO ESTOQUE(id,fabricante,qtdProdutos,nomeProduto) VALUES(?, ?, ?, ?)"
    static queryUpdate = "UPDATE ESTOQUE SET id = ? fabricante =?, qtdProdutos =?, nomeProduto =?"
    static queryDelete = "DELETE FROM ESTOQUE WHERE id = ?"
    static parDel = "id"
}

export default EstoqueDao