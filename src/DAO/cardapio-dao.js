import DAO from "./base-dao.js"

class MenuDAO extends DAO{
    static querySelectAll = 'SELECT * FROM MENU'
    static querySelect = 'SELECT * FROM MENU WHERE produto = ?'
    static queryInsert = 'INSERT INTO MENU (produto,valor) VALUES (?,?)'
    static queryUpdate = 'UPDATE MENU SET produto = ?, valor= ? WHERE produto = ?'
    static queryDelete = 'DELETE FROM MENU WHERE produto= ?'
}

export default MenuDAO