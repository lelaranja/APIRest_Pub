import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const SUPPLIERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "SUPPLIERS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "telefone" varchar(64),
    "cnpj" varchar(11),
    "produto" varchar(64)
  );`;

const ADD_SUPPLIERS_DATA = `
INSERT INTO SUPPLIERS (nome,telefone,cnpj,produto)
VALUES 
    ('Friboi', '1145236984', '12345678956', 'carne'),
    ('AMBEV', '1145236984', '34598628901', 'cerveja, destilado'),
    ('Melhoramentos', '1145236984', '234098567234', 'papel toalha, guardanapo')
`;

const criaTabelaSuppliers = () => {
  db.run(SUPPLIERS_SCHEMA, (e) => {
    if (e) console.log(e);
    else console.log("Tabela criada com sucesso");
  });
};

const populaTabelaSuppliers = () => {
  db.run(ADD_SUPPLIERS_DATA, (e) => {
    if (e) console.log(e);
    else console.log("Tabela populada com sucesso!");
  });
};

db.serialize(() => {
  criaTabelaSuppliers();
  populaTabelaSuppliers();
});
