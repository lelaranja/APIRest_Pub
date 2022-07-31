class autorizacao {
    static auth(app) {
        app.use((req, res, next) => {
            if (req.method !== "GET") {
                if (req.headers.user === "admin") {
                    next()
                } 
                else if(req.headers.user === "sub" && req.method !== "DELETE" ){
                    next()
                }else {
                    res.json({
                        "erro": "Usuario nao permitido"
                    })
                }
            } else {                
                next()
            }
        })
    }
}

export default autorizacao