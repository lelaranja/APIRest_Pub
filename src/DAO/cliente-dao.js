import DAO from "./base-dao.js"

class ClientDAO extends DAO{
    static querySelectAll = 'SELECT * FROM CLIENT'
    static querySelect = 'SELECT * FROM CLIENT WHERE nome = ?'
    static queryInsert = 'INSERT INTO CLIENT (nome,telefone,email) VALUES (?,?,?)'
    static queryUpdate = 'UPDATE CLIENT SET nome = ?, telefone= ?, email= ? WHERE nome = ?'
    static queryDelete = 'DELETE FROM CLIENT WHERE nome= ?'
    static paramDel = 'nome'
}

export default ClientDAO