import express from "express";
import MenuController from "./controller/cardapio-controller.js";
import SuppliersController from "./controller/fornecedor-controller.js";
import estoqueController from "./controller/estoque-controller.js";
import cors from "cors";
import autorizacao from "./middleware/valida-header.js"
import { TransactionsController } from "./controller/controller.js";
const app = express();

app.use(cors());
app.use(express.json());
autorizacao.auth(app)


TransactionsController.routes(app)
TransactionsController.routes(app);
MenuController.routes(app);
SuppliersController.routes(app);
estoqueController.routes(app);
export default app