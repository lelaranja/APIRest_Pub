import SuppliersDAO from "../DAO/fornecedor-dao.js";
import SuppliersModel from "../model/fornecedor-model.js";
import Validacoes from "../services/validacoes.js";

class SuppliersController {
  static routes = (app) => {
    app.get("/suppliers", async (req, res) => {
      try {
        const resposta = await SuppliersDAO.pickAllData();
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (error) {
        res.status(error.status).json(error.msg);
      }
    });

    app.get("/suppliers/cnpj/:cnpj", async (req, res) => {
      try {
        const resposta = await SuppliersDAO.dataPickOne(req.params.cnpj);
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (error) {
        res.status(error.status).json(error.msg);
      }
    });

    app.post("/suppliers", async (req, res) => {
      try {
        const dados = await SuppliersModel.validateModel(req.body);
        const resposta = await SuppliersDAO.insertData(dados);
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (error) {
        res.status(error.status).json(error.msg);
      }
    });

    app.put("/suppliers/cnpj/:cnpj", async (req, res) => {
      try {
        const dados = await SuppliersModel.validateModel(req.body);
        await Validacoes.notInBank(await SuppliersDAO.dataPickOne(req.params.cnpj));
        const resposta = await SuppliersDAO.attData(dados, req.params.cnpj);
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (error) {
        res.status(error.status).json(error.msg);
      }
    });

    app.delete("/suppliers/cnpj/:cnpj", async (req, res) => {
      try {
        await Validacoes.notInBank(await SuppliersDAO.dataPickOne(req.params.cnpj));
        const resposta = await SuppliersDAO.delData(req.params.cnpj);
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (error) {
        res.status(error.status).json(error.msg);
      }
    });
  };
}

export default SuppliersController;
