import DAO from "./base-dao.js";

class SuppliersDAO extends DAO {
  static querySelectAll = "SELECT * FROM SUPPLIERS";
  static querySelect = "SELECT * FROM SUPPLIERS WHERE cnpj = ?";
  static queryInsert =
    "INSERT INTO SUPPLIERS (nome, telefone, cnpj, produto) VALUES (?,?,?,?)";
  static queryUpdate =
    "UPDATE SUPPLIERS SET nome = ?, telefone = ?, cnpj = ?, produto= ? WHERE cnpj = ?";
  static queryDelete = "DELETE FROM SUPPLIERS WHERE cnpj = ?";
  static paramDel = "CNPJ";
}

export default SuppliersDAO;