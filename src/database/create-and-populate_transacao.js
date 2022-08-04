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

class TransactionsDb {
  static TRANSACTIONS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "TRANSACTIONS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "funcionario" varchar(64),
    "valorCompra" int,
    "produtos" varchar(64),
    "data" date
    );`;
  static ADD_TRANSACTIONS_DATA = `
    INSERT INTO TRANSACTIONS (funcionario,produtos,valorCompra,data)
    VALUES 
        ('Kleberr Knob', 'Drink de fogo, Caninha da serra, Batata gourmet', 50.00, 'Thu Aug 04 2022 00:40:18 GMT-0300 (Horário Padrão de Brasília)'),
        ('Kleberr Knob', 'Caninha da serra, Shot de ices', 30.00, 'Thu Aug 04 2022 00:40:18 GMT-0300 (Horário Padrão de Brasília)'),
        ('Flavio Mustang', 'Drink de fogo, Canitina da roça, Hamburguer gourmet', 50.00, 'Thu Aug 04 2022 00:40:18 GMT-0300 (Horário Padrão de Brasília)')
    `;

  static criaTabelaTransactions() {
    db.run(this.TRANSACTIONS_SCHEMA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela transação criada com sucesso");
    });
  }
  static populaTabelaTransactions() {
    db.run(this.ADD_TRANSACTIONS_DATA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela transação populada com sucesso!");
    });
  }
  static transactionsSerialize() {
    db.serialize(() => {
      this.criaTabelaTransactions();
      this.populaTabelaTransactions();
    });
  }
}

export default TransactionsDb;