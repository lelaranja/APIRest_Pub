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

class MenuDb {
    static MENU_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "MENU" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,    
        "produto" varchar(64),
        "valor" int,
        "descricao" varchar(255)
    );`;
    static ADD_MENU_DATA = `
    INSERT INTO MENU (produto,valor,descricao)
    VALUES 
        ('Caipirinha', 10.50, 'Drink de limão com cachaça 51 e açucar'),
        ('Calabresa acebolada', 25.00,'Uma porçao de 400 gramas de calabresa com cebola frita'),
        ('Skol', 5.00,'Pilsen, 350ml')
    `;
    static criaTabelaMenu = () => {
        db.run(this.MENU_SCHEMA, (e) => {
            if (e) console.log(e);
            else console.log("Tabela criada com sucesso");
        });
    };
    static populaTabelaMenu = () => {
        db.run(this.ADD_MENU_DATA, (e) => {
            if (e) console.log(e)
            else console.log("Tabela populada com sucesso!");
        });
    };
    static menuSerialize() {
        db.serialize(() => {
            this.criaTabelaMenu();
            this.populaTabelaMenu();
        });
    }
}


export default MenuDb