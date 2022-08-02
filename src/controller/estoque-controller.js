import EstoqueDAO from "../DAO/estoque-dao.js";
import EstoqueModel from "../Model/estoque-model.js";
import Validacoes from "../services/validacoes.js";

class EstoqueController {
    static routes(app){
    app.get('/storage', async (req,res)=>{
        try{
            console.log("to aqui");
            const dados = await EstoqueDAO.pegaTodosDados()
            res.status(dados.status).json(dados.resultado.msg)
        }catch(error){
            res.status(error.status).json(error.msg)
        }
})
    app.get('/storage/nomeProduto/:nomeProduto',async (req,res)=>{
        try{
            const response = await EstoqueDAO.pegaUmDado(req.params.nomeProduto);
            res.status(response.status).json(response.resultado.msg)
        }catch(error){
            res.status(error.status).json(error.msg)
        }
    })
    app.post('/storage',async (req,res)=>{
        try{
            const dados = new EstoqueModel(req.body)
            await Validacoes.reqIsEmpty(dados)
            const response = await EstoqueDAO.inserirDados(dados)
            res.status(response.status).json(response.resultado.msg)
        }catch(error){
            res.status(error.status).json(error.msg)
        }
    })
    app.put('/storage/nomeProduto/:nomeProduto',async(req,res)=>{
        try{
            const dados = new EstoqueModel(req.body);
            await Validacoes.notInBank(await EstoqueDAO.pegaUmDado(req.params.nomeProduto))
            await Validacoes.reqIsEmpty(dados)
            const response = await EstoqueDAO.atualizarDado(dados, req.params.nomeProduto)
            res.status(response.status).json(response.resultado.msg)
        }catch(error){
            res.status(error.status).json(error.msg)
        }
    })
    app.delete("/storage/nomeProduto/:nomeProduto", async (req, res) => {
        try {
            await Validacoes.notInBank(await EstoqueDAO.pegaUmDado(req.params.nomeProduto))
            const resposta = await EstoqueDAO.deletaDado(req.params.nomeProduto)
            res.status(resposta.status).json(resposta.resultado.msg);
        } catch (error) {
            res.status(error.status).json(error.msg);
        }
    });
}
}
export default EstoqueController;