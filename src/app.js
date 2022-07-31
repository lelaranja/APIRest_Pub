import express from "express";
import MenuController from "./controller/cardapio-controller.js";
import TransactionsController from "./controller/transacao-controller.js";
import cors from "cors";
import autorizacao from "./middleware/valida-header.js"

const port = 3000;
const app = express();

app.use(cors())
app.use(express.json());
autorizacao.auth(app)

app.listen(port, () =>{
    console.log(`Server online, address: http://localhost:${port}`)
})

TransactionsController.routes(app);
MenuController.routes(app)