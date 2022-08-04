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

class ClientDb {
    static CLIENT_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENT" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,    
    "nome" varchar(64),
    "telefone" varchar(64),
    "email" varchar(64)
);`;

    static ADD_CLIENT_DATA = `
INSERT INTO CLIENT (nome,telefone,email)
VALUES 
    ('Gilson', '2198744523', 'gilsons_drinks@mail.com'),
    ('Josélia', '2196654721', 'joselialima@mail.com'),
    ('Breno', '21932112021', 'brenoluiz@mail.com')
`;

    static criaTabelaClient = () => {
        db.run(this.CLIENT_SCHEMA, (e) => {
            if (e) console.log(e);
            else console.log("Tabela cliente criada com sucesso");
        });
    };

    static populaTabelaClient = () => {
        db.run(this.ADD_CLIENT_DATA, (e) => {
            if (e) console.log(e)
            else console.log("Tabela cliente populada com sucesso!");
        });
    };
    static clientSerialize() {
        db.serialize(() => {
            this.criaTabelaClient();
            this.populaTabelaClient();
        });

    }
}

export default ClientDb