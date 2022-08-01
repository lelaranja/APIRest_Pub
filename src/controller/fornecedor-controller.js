import SuppliersDAO from "../DAO/fornecedor-dao.js";
import SuppliersModel from "../model/fornecedor-model.js";
import Validacoes from "../services/valida-base.js";

class SuppliersController {
  static routes = (app) => {
    app.get("/suppliers", async (req, res) => {
      try {
        const resposta = await SuppliersDAO.pegaTodosDados();
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });

    app.get("/suppliers/cnpj/:cnpj", async (req, res) => {
      try {
        const resposta = await SuppliersDAO.pegaUmDado(req.params.cnpj);
        res.status(resposta.status).json(resposta.resultado);
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });

    app.post("/suppliers/criar", async (req, res) => {
      try {
        const dados = new SuppliersModel(req.body);
        await Validacoes.reqIsEmpty(dados);
        const resposta = await SuppliersDAO.inserirDados(dados);
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });

    app.put("/suppliers/atualizar/cnpj/:cnpj", async (req, res) => {
      try {
        const dados = new SuppliersModel(req.body);
        await Validacoes.notInBank(
          await SuppliersDAO.pegaUmDado(req.params.cnpj)
        );
        await Validacoes.reqIsEmpty(dados);
        const resposta = await SuppliersDAO.atualizarDado(
          dados,
          req.params.cnpj
        );
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });

    app.delete("/suppliers/deletar/cnpj/:cnpj", async (req, res) => {
      try {
        await Validacoes.notInBank(
          await SuppliersDAO.pegaUmDado(req.params.cnpj)
        );
        const resposta = await SuppliersDAO.deletaDado(req.params.cnpj);
        res.status(resposta.status).json(resposta.resultado.msg);
      } catch (e) {
        res.status(e.status).json(e.msg);
      }
    });
  };
}

export default SuppliersController;
