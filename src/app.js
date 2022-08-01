import express from "express";
import MenuController from "./controller/cardapio-controller.js";
import TransactionsController from "./controller/transacao-controller.js";
import SuppliersController from "./controller/fornecedor-controller.js";
import estoqueController from "./controller/estoque-controller.js";

import cors from "cors";
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server online, address: http://localhost:${port}`);
});

TransactionsController.routes(app);
MenuController.routes(app);
SuppliersController.routes(app);
estoqueController.routes(app);
