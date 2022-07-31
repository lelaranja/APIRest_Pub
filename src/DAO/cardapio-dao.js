import DAO from "./base-dao.js"

class MenuDAO extends DAO{
    static querySelectAll = 'SELECT * FROM MENU'
    static querySelect = 'SELECT * FROM MENU WHERE produto = ?'
    static queryInsert = 'INSERT INTO MENU (produto,valor,descricao) VALUES (?,?,?)'
    static queryUpdate = 'UPDATE MENU SET produto = ?, valor= ?, descricao= ? WHERE produto = ?'
    static queryDelete = 'DELETE FROM MENU WHERE produto= ?'
    static paramDel = 'produto'
}

export default MenuDAO