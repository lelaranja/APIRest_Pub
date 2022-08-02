import ClientDAO from "../DAO/cliente-dao.js"
import ClienteModel from "../model/cliente-model.js"
import Validacoes from "../services/validacoes.js";

class ClientController {
    static routes = (app) => {
        app.get("/client", async (req, res) => {
            try {
                const resposta = await ClientDAO.pegaTodosDados()
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        });
        app.get("/client/nome/:nome", async (req, res) => {
            try {
                const resposta = await ClientDAO.pegaUmDado(req.params.nome);
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        });
        app.post("/client", async (req, res) => {
            console.log(req)
            try {
                const dados = new ClienteModel(req.body);
                // console.log(dados)
                await Validacoes.reqIsEmpty(dados)
                const resposta = await ClientDAO.inserirDados(dados);
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
        app.put("/client/nome/:nome", async (req, res) => {
            try {
                const dados = new ClientModel(req.body);
                await Validacoes.notInBank(await ClientDAO.pegaUmDado(req.params.nome))
                await Validacoes.reqIsEmpty(dados)
                const resposta = await ClientDAO.atualizarDado(dados, req.params.nome)
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
        app.delete("/client/nome/:nome", async (req, res) => {
            try {
                await Validacoes.notInBank(await ClientDAO.pegaUmDado(req.params.nome))
                const resposta = await ClientDAO.deletaDado(req.params.nome)
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
    }
}

export default ClientController 