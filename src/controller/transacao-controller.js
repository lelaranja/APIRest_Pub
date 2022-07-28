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
  };
}

export default TransactionsController;
