import StorageDAO from "../DAO/estoque-dao.js";
import StorageModel from "../Model/estoque-model.js";
import Validacoes from "../services/validacoes.js";

class StorageController {
    static routes(app) {
        app.get('/storage', async (req, res) => {
            try {
                const dados = await StorageDAO.pickAllData()
                res.status(dados.status).json(dados.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        })
        app.get('/storage/nomeProduto/:nomeProduto', async (req, res) => {
            try {
                const response = await StorageDAO.dataPickOne(req.params.nomeProduto);
                res.status(response.status).json(response.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        })
        app.post('/storage', async (req, res) => {
            try {
                const dados = await StorageModel.ValidateModel(req.body)
                const response = await StorageDAO.insertData(dados)
                res.status(response.status).json(response.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        })
        app.put('/storage/nomeProduto/:nomeProduto', async (req, res) => {
            try {
                const dados = await StorageModel.ValidateModel(req.body);
                await Validacoes.notInBank(await StorageDAO.dataPickOne(req.params.nomeProduto))
                const response = await StorageDAO.attData(dados, req.params.nomeProduto)
                res.status(response.status).json(response.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg)
            }
        })
        app.delete("/storage/nomeProduto/:nomeProduto", async (req, res) => {
            try {
                await Validacoes.notInBank(await StorageDAO.dataPickOne(req.params.nomeProduto))
                const resposta = await StorageDAO.delData(req.params.nomeProduto)
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });
    }
}
export default StorageController;