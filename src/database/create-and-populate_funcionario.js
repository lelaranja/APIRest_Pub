import sqlite3 from "sqlite3";
import {
  dirname
} from "path";
import {
  fileURLToPath
} from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(
  import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

class StaffDb {
  static STAFF_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "STAFF" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "cpf" varchar(64),
    "datadenascimento" date
    );`;
  static ADD_STAFF_DATA = `
    INSERT INTO STAFF (nome, cpf, datadenascimento)
    VALUES 
        ('Leovegildo Moura', '23912345014', '10/04/2000'),
        ('Neolasco Comodoro', '54919259395', '23/09/1992'),
        ('Digo Assun', '12821393493', '11/05/1985')
    `;

  static criaTabelaStaff() {
    db.run(this.STAFF_SCHEMA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela funcionários criada com sucesso");
    });
  }
  static populaTabelaStaff() {
    db.run(this.ADD_STAFF_DATA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela funcionários populada com sucesso!");
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