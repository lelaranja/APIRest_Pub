import EstoqueDao from "../DAO/estoque-dao.js";
import estoqueDAO from "../DAO/estoque-dao.js";
import EstoqueModel from "../Model/estoque-model.js";
import Validacoes from "../services/validacoes.js";


class EstoqueController {
    static routes(app){
    app.get('/estoque', async (req,res)=>{
        try{
            const dados = await estoqueDAO.pegaTodosDados(req.params.estoque)
            res.status(dados.status).json(dados.resultado.msg)
        }catch(error){
            res.status(error.status).json(error.msg)
        }
})
    app.get('/estoque/:id',async (req,res)=>{
        try{
            const response = await estoqueDAO.pegaUmDado(req.params.id);
            res.status(response.status).json(response.msg)
        }catch(error){
            res.status(error.status).json(error.msg)
        }
    })
    app.get('/estoque/:fabricante',(req,res)=>{
        try{
            const response = estoqueDAO.pegaUmDado(req.params.fabricante);
            res.status(response.status).json(response.msg)
        }catch(error){
            res.status(error.status).json(error.msg)
        }    
    })
    app.get('/estoque/:qtdProdutos',async (req,res)=>{
        try{
            const response = await estoqueDAO.pegaUmDado(req.params.qtdProdutos);
            res.status(response.status).json(response.msg)
        }catch(error){
            res.status(error.status).json(error.msg)
        }
    });
    app.get('/estoque/:nomeProduto',async (req,res)=>{
        try{
            const response = await estoqueDAO.pegaUmDado(req.params.nomeProduto);
            res.status(response.status).json(response.msg)
        }catch(error){
            res.status(error.status).json(error.msg)
        }
    })
    app.post('/estoque/',async (req,res)=>{
        try{
            const dados = new EstoqueModel(req.body)
            await Validacoes.reqIsEmpty(dados)
            const response = await EstoqueDao.inserirDados(dados)
            res.status(response.status).json(response.resultado.msg)
        }catch(error){
            res.status(error.status).json(error.msg)
        }
    })
    app.put('/estoque/:id',(req,res)=>{

    })
    
 }
}
export default EstoqueController;