import ErrosModel from "../model/errors-model.js"
class autorizacao {
    static auth(app) {
        app.use((req, res, next) => {
            if (req.method !== "GET") {
                if (req.headers.user === "admin") {
                    next()
                } else if (req.headers.user === "sub" && req.method === "DELETE") {
                    const erro = new ErrosModel('Usuario não autorizado', 403)
                    res.status(erro.status).json(erro.msg)
                } else if (req.headers.user === "sub" && req.method !== "DELETE") {
                    next()
                } else {
                    const erro = new ErrosModel('Usuario não autenticado', 401)
                    res.status(erro.status).json(erro.msg)
                }
            } else {
                next()
            }
        })
    }
}

export default autorizacao