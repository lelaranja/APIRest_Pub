import express from "express";
import estoqueController from './controller/estoque-controller.js';

const port = 3000;
const app = express();

app.use(express.json());

estoqueController.routes(app)
app.listen(port, () =>{
    console.log(`Server online, address: http://localhost:${port}`)
})