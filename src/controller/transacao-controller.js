import TransactionsDAO from "../DAO/transacao-dao.js";
import TransactionsModel from "../model/transacao-model.js";
import Validacoes from "../services/valida-base.js";

class TransactionsController {
  static routes = (app) => {

//OK

    app.get("/transactions", async (req, res) => {
      try {
        res.json(await TransactionsDAO.pegaTodosDados());
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });

//OK

    app.get("/transactions/id/:id", async (req, res) => {
      try {
        
        const resposta = await TransactionsDAO.pegaUmDado(req.params.id);
        res.status(resposta.status).json(resposta.resultado);
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });

// OK

    app.post("/transactions/criar", async (req, res) => {
      try {
        const body = req.body;
        const dados = new TransactionsModel(
          body.funcionario,
          body.produtos,
          body.valorCompra
        );
        await Validacoes.validBody(dados);
        res.json(await TransactionsDAO.inserirDados(dados));
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });

    app.put("/transactions/atualizar/id/:id", async (req, res) => {
      const body = req.body;
      const dados = new TransactionsModel(
        body.funcionario,
        body.produtos,
        body.valorCompra
      );
      try {
        res.json(await TransactionsDAO.atualizarDado(dados, req.params.id));
      } catch (e) {
        res.json(e);
      }
    });

    app.delete("/transactions/deletar/id/:id", async (req, res) => {
      try {
        res.json(await TransactionsDAO.deletaDado(req.params.id));
      } catch (e) {
        res.json(e);
      }
    });
  };
}

export default TransactionsController;
