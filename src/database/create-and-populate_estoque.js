import sqlite3 from "sqlite3";
import {dirname} from "path";
import {fileURLToPath} from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(
    import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

class StorageDb{
    static STORAGE_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "STORAGE" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,    
        "fabricante" varchar(64),
        "qtdProdutos" int,
        "nomeProduto" varchar(64)
    );`;
    
    static ADD_STORAGE_DATA = `
    INSERT INTO STORAGE (fabricante, qtdProdutos, nomeProduto)
    VALUES 
        ('Ambev', 150, 'Antarctica'),
        ('GrupoPetropolis', 2,'Itaipava'),
        ('CocaColaBrasil', 90,'Heineken')
    `;
    
    static criaTabelaStorage(){
        db.run(this.STORAGE_SCHEMA, (e) => {
            if (e) console.log(e);
            else console.log("Tabela criada com sucesso");
        });
    };
    
    static populaTabelaStorage(){
        db.run(this.ADD_STORAGE_DATA, (e) => {
            if (e) console.log(e)
            else console.log("Tabela populada com sucesso!");
        });
    };
    
    static storageSerializer() {
    db.serialize(() => {
        this.criaTabelaStorage();
        this.populaTabelaStorage();
    });
}
}

StorageDb.storageSerializer()
export default StorageDb;