import express from "express";
<<<<<<< HEAD
import estoqueController from './controller/estoque-controller.js';

=======
import MenuController from "./controller/cardapio-controller.js";
import TransactionsController from "./controller/transacao-controller.js";
import SuppliersController from "./controller/fornecedor-controller.js";
import cors from "cors";
>>>>>>> master
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
estoqueController.routes(app)
app.listen(port, () =>{
    console.log(`Server online, address: http://localhost:${port}`)
})
=======
app.listen(port, () => {
  console.log(`Server online, address: http://localhost:${port}`);
});

TransactionsController.routes(app);
MenuController.routes(app);
SuppliersController.routes(app);
>>>>>>> master
