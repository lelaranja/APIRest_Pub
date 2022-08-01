import DAO from "./base-dao.js";

class StaffDAO extends DAO {
    static querySelectAll = 'SELECT * FROM FUNCIONARIOS'
    static querySelect = 'SELECT * FROM FUNCIONARIOS WHERE id = ?'
    static queryInsert = 'INSERT INTO FUNCIONARIOS (nome, cpf, datadenascimento) VALUES (?,?,?)'
    static queryUpdate = 'UPDATE FUNCIONARIOS SET nome = ?, cpf = ?. datadenascimento = ? WHERE nome = ?'
    static queryDelete = 'DELETE FROM FUNCIONARIOS WHERE id = ?'
}

export default StaffDAO