import DB from "../database/db-sqlite.js"

class DAO{

    static pegaTodosDados(){
        return new Promise((resolve, reject)=>{
            DB.all(this.querySelect, (erro, linhas) =>{
                if(erro){
                    reject({
                        msg : erro.message,
                        erro : true
                    })
                } else {
                    resolve({
                        resultado : linhas,
                        erro : false
                    })
                }
            })
        })
    }
    static inserirDados(){
        
    }
}

export default DAO