import express from "express";
import MenuController from "./controller/cardapio-controller.js";
import TransactionsController from "./controller/transacao-controller.js";

const port = 3000;
const app = express();

app.use(express.json());

app.listen(port, () =>{
    console.log(`Server online, address: http://localhost:${port}`)
})

TransactionsController.routes(app);
MenuController.routes(app)