import sqlite3 from "sqlite3";
import {dirname} from "path";
import {fileURLToPath} from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(
    import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const CLIENT_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENT" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,    
    "nome" varchar(64),
    "telefone" varchar(64),
    "email" varchar(64)
);`;

const ADD_CLIENT_DATA = `
INSERT INTO CLIENT (nome,telefone,email)
VALUES 
    ('Caipirinha', 'string', 'Drink de limão com cachaça 51 e açucar'),
    ('Calabresa acebolada', 'string','Uma porçao de 400 gramas de calabresa com cebola frita'),
    ('Skol', 'string','Pilsen, 350ml')
`;

const criaTabelaClient = () => {
    db.run(CLIENT_SCHEMA, (e) => {
        if (e) console.log(e);
        else console.log("Tabela criada com sucesso");
    });
};

const populaTabelaClient = () => {
    db.run(ADD_CLIENT_DATA, (e) => {
        if (e) console.log(e)
        else console.log("Tabela populada com sucesso!");
    });
};

db.serialize(() => {
    criaTabelaClient();
    populaTabelaClient();
});