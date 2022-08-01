import estoqueDAO from "../DAO/estoque-dao.js";
import estoqueModel from "../Model/estoque-model.js";


class Estoque {
    static estoque(app){
    app.get('/estoque',(req,res)=>{
    try{
        res.json(estoqueDAO.pegaTodosUsuarios())
    }
    catch(e){
        res.json(error)
    }
})
    app.get('/estoque/:id',(req,res)=>{
         
    })
    app.get('/estoque/:fabricante',(req,res)=>{

    })
    app.get('/estoque/:qtdProdutos',(req,res)=>{

    });
    app.get('/estoque/:nomeProduto',(req,res)=>{

    })
    app.post('/estoque/:id',(req,res)=>{

    })
    app.post('/estoque/:fabricante',(req,res)=>{

    });
    app.post('/estoque/:qtdProdutos',(req,res)=>{

    })
    app.post('/estoque/:nomeProduto',(req,res)=>{

})
}
}
export default Estoque;