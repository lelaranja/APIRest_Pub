import TransctionsDAO from "../DAO/transacao-dao.js";


class TransactionsController {
  static routes = (app) => {
    app.get("/transactions", async (req, res) => {

      res.json(await TransctionsDAO.pegaTodosDados(`TRANSACTIONS`));
    });
  };
}

export default TransactionsController;
