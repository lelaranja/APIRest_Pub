import DAO from './base-dao.js';

class StorageDAO extends DAO {
    static querySelectAll = "SELECT * FROM STORAGE"
    static querySelect = "SELECT * FROM STORAGE WHERE nomeProduto = ?"
    static queryInsert = "INSERT INTO STORAGE(fabricante,qtdProdutos,nomeProduto) VALUES(?, ?, ?)"
    static queryUpdate = "UPDATE STORAGE SET fabricante =?, qtdProdutos =?, nomeProduto =? WHERE nomeProduto =?"
    static queryDelete = "DELETE FROM STORAGE WHERE nomeProduto = ?"
    static paramDel = "produto"
}

export default StorageDAO