import DAO from "./base-dao.js";

class StaffDAO extends DAO {
    static querySelectAll = 'SELECT * FROM STAFF'
    static querySelect = 'SELECT * FROM STAFF WHERE nome = ?'
    static queryInsert = 'INSERT INTO STAFF (nome, cpf, datadenascimento) VALUES (?,?,?)'
    static queryUpdate = 'UPDATE STAFF SET nome = ?, cpf = ?, datadenascimento = ? WHERE nome = ?'
    static queryDelete = 'DELETE FROM STAFF WHERE nome = ?'
    static paramDel = 'nome'
}

export default StaffDAO