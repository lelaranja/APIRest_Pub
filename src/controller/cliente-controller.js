import ClientDAO from "../DAO/cliente-dao.js"
import ClientModel from "../model/cliente-model.js"
import Validacoes from "../services/validacoes.js";

class ClientController {
    static routes = (app) => {
        app.get("/client", async (req, res) => {
            try {
                const resposta = await ClientDAO.pickAllData()
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        });
        app.get("/client/nome/:nome", async (req, res) => {
            try {
                const resposta = await ClientDAO.dataPickOne(req.params.nome);
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        });
        app.post("/client", async (req, res) => {
            try {
                const dados = await ClientModel.validateModel(req.body);
                const resposta = await ClientDAO.insertData(dados);
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
        app.put("/client/nome/:nome", async (req, res) => {
            try {
                const dados = await ClientModel.validateModel(req.body);
                await Validacoes.notInBank(await ClientDAO.dataPickOne(req.params.nome))
                const resposta = await ClientDAO.attData(dados, req.params.nome)
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
        app.delete("/client/nome/:nome", async (req, res) => {
            try {
                await Validacoes.notInBank(await ClientDAO.dataPickOne(req.params.nome))
                const resposta = await ClientDAO.delData(req.params.nome)
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
    }
}

export default ClientController