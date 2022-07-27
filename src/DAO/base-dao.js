import DB from "../database/db-sqlite.js"

class DAO{

    static pegaTodosDados(entidade){
        return new Promise((resolve, reject)=>{

            DB.all(`SELECT * FROM ${entidade}`, (erro, linhas) =>{
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
}

export default DAO