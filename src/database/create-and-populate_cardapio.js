import sqlite3 from "sqlite3";
import {dirname} from "path";
import {fileURLToPath} from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(
    import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const MENU_SCHEMA = `
CREATE TABLE IF NOT EXISTS "MENU" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,    
    "produto" varchar(64),
    "valor" int
);`;

const ADD_MENU_DATA = `
INSERT INTO MENU (produto,valor)
VALUES 
    ('Caipirinha', '10,00'),
    ('Porção de calabresa acebolada', '20,00'),
    ('Skol', '5,00')
`;

const criaTabelaMenu = () => {
    db.run(MENU_SCHEMA, (e) => {
        if (e) console.log(e);
        else console.log("Tabela criada com sucesso");
    });
};

const populaTabelaMenu = () => {
    db.run(ADD_MENU_DATA, (e) => {
        if (e) console.log(e)
        else console.log("Tabela populada com sucesso!");
    });
};

db.serialize(() => {
    criaTabelaMenu();
    populaTabelaMenu();
});