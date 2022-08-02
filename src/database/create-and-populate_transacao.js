import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

<<<<<<< HEAD
const TRANSACTIONS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
=======
class TransactionsDb {
  static TRANSACTIONS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TRANSACTIONS" (
>>>>>>> e74c679923d927fb726c06a9a568036b8badde2a
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "cpf" varchar(64),
    "datadenascimento" date
  );`;

<<<<<<< HEAD
const ADD_TRANSACTIONS_DATA = `
INSERT INTO FUNCIONARIOS (nome,cpf,datadenascimento)
=======
  static ADD_TRANSACTIONS_DATA = `
INSERT INTO TRANSACTIONS (funcionario,produtos,valorCompra,data)
>>>>>>> e74c679923d927fb726c06a9a568036b8badde2a
VALUES 
    ('Jacinto Ferreira', '72527649076', '23/03/2022'),
    ('Neolasco Comodoro', '80600034020', '31/11/2022'),
    ('Leovegildo Moura', '965.100.500-99', '17/08/2022')
`;

  static criaTabelaTransactions() {
    db.run(this.TRANSACTIONS_SCHEMA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela criada com sucesso");
    });
  }

  static populaTabelaTransactions() {
    db.run(this.ADD_TRANSACTIONS_DATA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela populada com sucesso!");
    });
  }
  static TransactionsSerialize() {
    db.serialize(() => {
      this.criaTabelaTransactions();
      this.populaTabelaTransactions();
    });
  }
}

export default TransactionsDb;
