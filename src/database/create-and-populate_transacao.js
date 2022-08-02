import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const TRANSACTIONS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "cpf" varchar(64),
    "datadenascimento" date
  );`;

const ADD_TRANSACTIONS_DATA = `
INSERT INTO FUNCIONARIOS (nome,cpf,datadenascimento)
VALUES 
    ('Jacinto Ferreira', '72527649076', '23/03/2022'),
    ('Neolasco Comodoro', '80600034020', '31/11/2022'),
    ('Leovegildo Moura', '965.100.500-99', '17/08/2022')
`;

const criaTabelaTransactions = () => {
  db.run(TRANSACTIONS_SCHEMA, (e) => {
    if (e) console.log(e);
    else console.log("Tabela criada com sucesso");
  });
};

const populaTabelaTransactions = () => {
  db.run(ADD_TRANSACTIONS_DATA, (e) => {
    if (e) console.log(e)
    else console.log("Tabela populada com sucesso!");
  });
};

db.serialize(() => {
  criaTabelaTransactions();
  populaTabelaTransactions();
});
