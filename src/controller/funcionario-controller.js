import StaffDAO from "../DAO/funcionario-dao.js";
import StaffModel from "../model/funcionario-model.js";
import Validacoes from "../services/validacoes.js";

class StaffControllers {
    static routes = (app) => {
        app.get("/staff", async (req, res) => {
            try {
                const resposta = await StaffDAO.pegaTodosDados(req.body)
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (e) {
                res.status(e.status).json(e.msg);
            }
        });

        app.get("/staff/nome/:nome", async (req, res) => {
            try {
                const resposta = await StaffDAO.pegaUmDado(req.params.nome)
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (e) {
                res.status(e.status).json(e.msg);
            }
        });

        app.post("/staff", async (req, res) => {
            try {
                const dados = new StaffModel(req.body);
                await Validacoes.reqIsEmpty(dados)
                const resposta = await StaffDAO.inserirDados(dados)
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (e) {
                res.status(e.status).json(e.msg);
            }
        });

        app.put("/staff/nome/:nome", async (req, res) => {
            try {
                const dados = new StaffModel(req.body);
                await Validacoes.notInBank(await StaffDAO.pegaUmDado(req.params.nome));
                await Validacoes.reqIsEmpty(dados)
                const resposta = await StaffDAO.atualizarDado(dados, req.params.nome);
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (e) {
                res.status(e.status).json(e.msg);
            }
        });

        app.delete("/staff/nome/:nome", async (req, res) => {
            try {
                await Validacoes.notInBank(await StaffDAO.pegaUmDado(req.params.nome));
                const resposta = await StaffDAO.deletaDado(req.params.nome);
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (e) {
                res.status(e.status).json(e.msg);
            }
        })


    };
}

export default StaffControllers;

