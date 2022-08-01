import { Database } from "../DAO/estoque-dao.js";



class Estoque {
    static estoque(app){
    app.get('/estoque',(req,res)=>{
    res.send();
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