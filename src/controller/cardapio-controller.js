import MenuDAO from "../DAO/cardapio-dao.js"
import MenuModel from "../model/cardapio-model.js"
import Validacoes from "../services/validacoes.js";

class MenuController {
    static routes = (app) => {
        app.get("/menu", async (req, res) => {
            try {
                const resposta = await MenuDAO.pickAllData()
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        });
        app.get("/menu/produto/:produto", async (req, res) => {
            try {
                const resposta = await MenuDAO.dataPickOne(req.params.produto);
                console.log(resposta)
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        });
        app.post("/menu", async (req, res) => {
            try {
                const dados = new MenuModel(req.body);
                await Validacoes.reqIsEmpty(dados)
                const resposta = await MenuDAO.insertData(dados);
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
        app.put("/menu/produto/:produto", async (req, res) => {
            try {
                const dados = new MenuModel(req.body);
                await Validacoes.notInBank(await MenuDAO.dataPickOne(req.params.produto))
                await Validacoes.reqIsEmpty(dados)
                const resposta = await MenuDAO.attData(dados, req.params.produto)
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
        app.delete("/menu/produto/:produto", async (req, res) => {
            try {
                await Validacoes.notInBank(await MenuDAO.dataPickOne(req.params.produto))
                const resposta = await MenuDAO.delData(req.params.produto)
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
    }
}

export default MenuController