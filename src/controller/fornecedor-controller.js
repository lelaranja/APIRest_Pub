import SuppliersDAO from "../DAO/fornecedor-dao.js";
import SuppliersModel from "../model/fornecedor-model.js";
import Validacoes from "../services/validacoes.js";

class SuppliersController {
  static routes = (app) => {
    app.get("/suppliers", async (req, res) => {
      try {
        const resposta = await SuppliersDAO.pickAllData();
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });

    app.get("/suppliers/cnpj/:cnpj", async (req, res) => {
      try {
        const resposta = await SuppliersDAO.dataPickOne(req.params.cnpj);
        res.status(resposta.status).json(resposta.resultado);
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });

    app.post("/suppliers", async (req, res) => {
      try {
        const dados = new SuppliersModel(req.body);
        await Validacoes.reqIsEmpty(dados);
        const resposta = await SuppliersDAO.insertData(dados);
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });

    app.put("/suppliers/cnpj/:cnpj", async (req, res) => {
      try {
        const dados = new SuppliersModel(req.body);
        await Validacoes.notInBank(
          await SuppliersDAO.dataPickOne(req.params.cnpj)
        );
        await Validacoes.reqIsEmpty(dados);
        const resposta = await SuppliersDAO.attData(
          dados,
          req.params.cnpj
        );
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });

    app.delete("/suppliers/cnpj/:cnpj", async (req, res) => {
      try {
        await Validacoes.notInBank(
          await SuppliersDAO.dataPickOne(req.params.cnpj)
        );
        const resposta = await SuppliersDAO.delData(req.params.cnpj);
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });
  };
}

export default SuppliersController;
