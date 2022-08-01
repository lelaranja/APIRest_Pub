import app from '../../src/app.js'
import request from 'supertest'

class Test {
    static test() {
        describe(this.describe, () => {
            test("Rota GET", async () => {
                const resposta = await request(app).get(this.rootPath)
                expect(resposta.status).toBe(200)
            })
            test("Rota POST", async () => {
                const resposta = await request(app).post(this.rootPath).set('user', 'admin')
                    .send(this.mock)
                expect(resposta.status).toBe(201)
            })
            test("Rota POST", async () => {
                const resposta = await request(app).post(this.rootPath).set('user', 'sub')
                    .send(this.mock)
                expect(resposta.status).toBe(201)
            })
            test("Rota POST", async () => {
                const resposta = await request(app).post(this.rootPath)
                    .send(this.mock)
                expect(resposta.status).toBe(401)
            })
            test("Rota GET com um parametro", async () => {
                const resposta = await request(app).get(this.rootPath + this.paramPath + this.mock.produto)
                expect(resposta.status).toBe(200)
                expect(resposta.body.dados.produto).toBe(this.mock.produto)
            })
            test("Rota GET um usuario que não existe", async () => {
                const resposta = await request(app).get(this.rootPath + this.paramPath + "foo/bar")
                expect(resposta.status).toBe(404)
            })
            test("Rota PUT", async () => {
                const respostaPut = await request(app).put(this.rootPath + this.paramPath + this.mock.produto)
                    .set('user', 'admin')
                    .send(this.putAtt)
                expect(respostaPut.status).toBe(200)
                const respostaGet = await request(app).get(this.rootPath + this.paramPath + this.putAtt.produto)
                expect(respostaGet.body.dados.produto).toBe(this.putAtt.produto)
            })
            test("Rota DELETE", async () => {
                const respostaDelete = await request(app).delete(this.rootPath + this.paramPath + this.putAtt.produto)
                    .set('user', 'admin')
                expect(respostaDelete.status).toBe(200)
                expect(respostaDelete.body.erro).toBeFalsy()
                // Verifica se o usuario foi realmente deletado
                const respostaGet = await request(app).get(this.rootPath + this.paramPath + this.putAtt.produto)
                expect(respostaGet.status).toBe(404)
            })
        })
    }
}

export default Test