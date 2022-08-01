import StaffDAO from "../DAO/funcionario-dao.js";
import StaffModel from "../model/funcionario-model.js";

class StaffControllers {
    static routes = (app) =>{
        app.get("/staff", async (req, res)=>{
            try{
                res.json(await StaffDAO.pegaTodosDados());
            } catch (e){
                res.json(e)
            }
        });

        app.get("/staff/nome/:id", async (req, res)=>{
            try{
                const resposta = await StaffDAO.pegaUmDado(req.params.id)
                res.json(resposta)
            } catch (e){
                res.json(e)
            }
        });

        app.post("/staff/criar", async (req, res)=>{
            const body = req.body;
            const dados = new StaffModel(
                body.nome,
                body.cpf,
                body.datadenascimento
            );
            try {
                res.json(await StaffDAO.inserirDados(dados));
            } catch (e){
                res.json(e);
            }
        });

        app.put("/staff/atualizar/nome/:nome", async (req, res)=>{
            const body = req.body
            const dados = new StaffModel(
                body.nome,
                body.cpf,
                body.datadenascimento
            )
            try {
                res.json(await StaffDAO.atualizarDado(dados, req.params.nome))
            } catch(e){
                res.json(e)
            }
        });

        app.delete("/staff/deletar/nome/:nome", async (req, res)=>{
            try {
                res.json(await StaffDAO.deletaDado(req.params.nome))
            } catch (e) {
                res.json(e)
            }
        })
        
        
    };
}

export default StaffControllers;

