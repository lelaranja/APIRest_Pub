import TransactionsDAO from "../DAO/transacao-dao.js";
import TransactionsModel from "../model/transacao-model.js";
import Validacoes from "../services/validacoes.js";

class TransactionsController {
  static routes = (app) => {

    app.get("/transactions", async (req, res) => {
      try {
        const resposta = await TransactionsDAO.pickAllData()
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (error) {
        res.status(error.status).json(error.msg);
      }
    });


    app.get("/transactions/id/:id", async (req, res) => {
      try {
        const resposta = await TransactionsDAO.dataPickOne(req.params.id);
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (error) {
        res.status(error.status).json(error.msg);
      }
    });


    app.post("/transactions", async (req, res) => {
      try {
        const dados = await TransactionsModel.validateModel(req.body);
        const resposta = await TransactionsDAO.insertData(dados);
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (error) {
        res.status(error.status).json(error.msg);
      }
    });


    app.put("/transactions/id/:id", async (req, res) => {
      try {
        const dados = await TransactionsModel.validateModel(req.body);
        await Validacoes.notInBank(await TransactionsDAO.dataPickOne(req.params.id))
        const resposta = await TransactionsDAO.attData(dados, req.params.id)
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (error) {
        res.status(error.status).json(error.msg);
      }
    });


    app.delete("/transactions/id/:id", async (req, res) => {
      try {
        await Validacoes.notInBank(await TransactionsDAO.dataPickOne(req.params.id))
        const resposta = await TransactionsDAO.delData(req.params.id)
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (error) {
        res.status(error.status).json(error.msg);
      }
    });
  };
}

export default TransactionsController;
