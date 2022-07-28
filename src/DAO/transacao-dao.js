import DAO from "./base-dao.js";

class TransactionsDAO extends DAO{
    static querySelect = 'SELECT * FROM TRANSACTIONS'
    
}

export default TransactionsDAO