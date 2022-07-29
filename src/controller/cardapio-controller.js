import MenuDAO from "../DAO/cardapio-dao.js"
import MenuModel from "../model/cardapio-model.js"

class MenuController {
    static routes = (app) => {
        app.get("/menu", async (req, res) => {
            try {
                res.json(await MenuDAO.pegaTodosDados())
            } catch (error) {
                res.json(error)
            }
        });
        app.get("/menu/produto/:produto", async (req, res) => {
            try {
                const resposta = await MenuDAO.pegaUmDado(req.params.produto);
                res.json(resposta)
            } catch (e) {
                res.json(e);
            }
        });
        app.post("/menu/criar", async (req, res) => {
            const body = req.body;
            const dados = new MenuModel(
                body.produto,
                body.valor
            );
            try {
                res.json(await MenuDAO.inserirDados(dados));
            } catch (e) {
                res.json(e);
            }
        });
        app.put("/menu/atualizar/produto/:produto", async (req, res) => {
            const body = req.body;
            const dados = new MenuModel(
                body.produto,
                body.valor
            );
            try {
                res.json(await MenuDAO.atualizarDado(dados, req.params.produto))
            } catch (e) {
                res.json(e)
            }
        })
        app.delete("/menu/deletar/produto/:produto", async (req, res) => {
            try {
                res.json(await MenuDAO.deletaDado(req.params.produto))
            } catch (e) {
                res.json(e)
            }
        })
    }
}

export default MenuController