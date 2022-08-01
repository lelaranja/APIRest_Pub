import DAO from "./base-dao.js";

class TransactionsDAO extends DAO{
    static querySelectAll = 'SELECT * FROM TRANSACTIONS'
    static querySelect = 'SELECT * FROM TRANSACTIONS WHERE ID = ?'
    static queryInsert = 'INSERT INTO TRANSACTIONS (funcionario,produtos,valorCompra,data) VALUES (?,?,?,?)'
    static queryUpdate = 'UPDATE TRANSACTIONS SET funcionario = ?, produtos = ?, valorCompra = ?, data= ? WHERE id = ?'
    static queryDelete = 'DELETE FROM TRANSACTIONS WHERE id= ?'
    static paramDel = 'ID'
}

export default TransactionsDAO