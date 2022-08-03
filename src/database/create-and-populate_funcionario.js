import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

class StaffDb {
  static STAFF_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "cpf" varchar(64),
    "datadenascimento" date
    );`;
  static ADD_STAFF_DATA = `
    INSERT INTO FUNCIONARIOS (nome, cpf, datadenascimento)
    VALUES 
        ('Leovegildo Moura', '239.123.450-14', '10/04/2000'),
        ('Neolasco Comodoro', '549.192.593-95', '23/09/1992'),
        ('Digo Assun', '128.213.934-93', '11/05/1985')
    `;

  static criaTabelaStaff() {
    db.run(this.STAFF_SCHEMA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela criada com sucesso");
    });
  }
  static populaTabelaStaff() {
    db.run(this.ADD_STAFF_DATA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela populada com sucesso!");
    });
  }
  static staffSerialize() {
    db.serialize(() => {
      this.criaTabelaStaff();
      this.populaTabelaStaff();
    });
  }
}

export default StaffDb;
