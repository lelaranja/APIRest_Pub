import TransactionsDAO from "../DAO/transacao-dao.js";
import TransctionsDAO from "../DAO/transacao-dao.js";

class TransactionsController {
  static routes = (app) => {
    app.get("/transactions", async (req, res) => {
      try {
        res.json(await TransctionsDAO.pegaTodosDados());
      } catch (e) {
        res.json(e);
      }
    });
    app.get("/transactions/id/:id", async (req, res) => {
      try {
        res.json(await TransactionsDAO.pegaUmDado(req.params.id))
      } catch (e) {
        res.json(e)
      }
    })
  };
}

export default TransactionsController;
