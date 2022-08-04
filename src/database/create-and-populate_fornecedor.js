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

class SuppliersDb {
  static SUPPLIERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "SUPPLIERS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "telefone" varchar(64),
    "cnpj" varchar(11),
    "produto" varchar(64)
  );`;

  static ADD_SUPPLIERS_DATA = `
INSERT INTO SUPPLIERS (nome,telefone,cnpj,produto)
VALUES 
    ('Friboi', '1145236984', '12345678956111', 'carne'),
    ('AMBEV', '1145236984', '34598628901111', 'cerveja, destilado'),
    ('Melhoramentos', '1145236984', '23409856723411', 'papel toalha, guardanapo')
`;

  static criaTabelaSuppliers() {
    db.run(this.SUPPLIERS_SCHEMA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela fornecedor criada com sucesso");
    });
  }

  static populaTabelaSuppliers() {
    db.run(this.ADD_SUPPLIERS_DATA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela fornecedor populada com sucesso!");
    });
  }

  static suppliersSerialize() {
    db.serialize(() => {
      this.criaTabelaSuppliers();
      this.populaTabelaSuppliers();
    });
  }
}

export default SuppliersDb;