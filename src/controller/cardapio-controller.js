import MenuDAO from "../DAO/cardapio-dao.js"
import MenuModel from "../model/cardapio-model.js"
import Validacoes from "../services/valida-base.js";

class MenuController {
    static routes = (app) => {
        app.get("/menu", async (req, res) => {
            try {
                const resposta = await MenuDAO.pegaTodosDados()
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        });
        app.get("/menu/produto/:produto", async (req, res) => {
            try {
                const resposta = await MenuDAO.pegaUmDado(req.params.produto);
                res.status(resposta.status).json(resposta.resultado)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        });
        app.post("/menu/criar", async (req, res) => {
            try {
                const dados = new MenuModel(req.body);
                await Validacoes.reqIsEmpty(dados)
                const resposta = await MenuDAO.inserirDados(dados);
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
        app.put("/menu/atualizar/produto/:produto", async (req, res) => {
            try {
                const dados = new MenuModel(req.body);
                await Validacoes.notInBank(await MenuDAO.pegaUmDado(req.params.produto))
                await Validacoes.reqIsEmpty(dados)
                const resposta = await MenuDAO.atualizarDado(dados, req.params.produto)
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
        app.delete("/menu/deletar/produto/:produto", async (req, res) => {
            try {
                await Validacoes.notInBank(await MenuDAO.pegaUmDado(req.params.produto))
                const resposta = await MenuDAO.deletaDado(req.params.produto)
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
    }
}

export default MenuController