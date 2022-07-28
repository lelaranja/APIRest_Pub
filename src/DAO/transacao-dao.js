import DAO from "./base-dao.js";

class TransactionsDAO extends DAO{
    static querySelectAll = 'SELECT * FROM TRANSACTIONS'
    static querySelect = 'SELECT * FROM TRANSACTIONS WHERE ID = ?'
    
}

export default TransactionsDAO