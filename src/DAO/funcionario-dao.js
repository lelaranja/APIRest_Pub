import DAO from "./base-dao.js";

class StaffDAO extends DAO {
    static querySelectAll = 'SELECT * FROM FUNCIONARIOS'
    static querySelect = 'SELECT * FROM FUNCIONARIOS WHERE nome = ?'
    static queryInsert = 'INSERT INTO FUNCIONARIOS (nome, cpf, datadenascimento) VALUES (?,?,?)'
    static queryUpdate = 'UPDATE FUNCIONARIOS SET nome = ?, cpf = ?, datadenascimento = ? WHERE nome = ?'
    static queryDelete = 'DELETE FROM FUNCIONARIOS WHERE nome = ?'
    static paramDel = 'nome'
}

export default StaffDAO