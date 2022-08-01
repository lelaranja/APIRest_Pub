import app from '../../src/app.js'
import request  from 'supertest'

class Test{
    static test(){
        describe(this.describe, ()=>{
            test("Rota GET", async ()=>{
                const resposta = await request(app).get(this.rootPath)
                expect(resposta.status).toBe(200)
            })
            test("Rota POST", async ()=>{                
                const resposta = await request(app).post(this.rootPath).set('user', 'admin')                
                .send(this.mock)
                expect(resposta.status).toBe(201)
            })
            test("Rota POST", async ()=>{                
                const resposta = await request(app).post(this.rootPath).set('user', 'sub')                
                .send(this.mock)
                expect(resposta.status).toBe(201)
            })
            test("Rota POST", async ()=>{
                const resposta = await request(app).post(this.rootPath)
                .send(this.mock)
                expect(resposta.status).toBe(401)
            })
        })
    }
}

export default Test
