import app from "../../src/app.js";
import request from "supertest";

class Test {
  static test() {
    describe(this.describe, () => {
      test("Rota GET", async () => {
        const resposta = await request(app).get(this.rootPath);
        expect(resposta.status).toBe(200);
      });
      test("Rota POST", async () => {
        const resposta = await request(app)
          .post(this.rootPath)
          .set("user", "admin")
          .send(this.mock);
        expect(resposta.status).toBe(201);
      });
      test("Rota POST", async () => {
        const resposta = await request(app)
          .post(this.rootPath)
          .set("user", "sub")
          .send(this.mock);
        expect(resposta.status).toBe(201);
      });
      test("Rota POST", async () => {
        const resposta = await request(app).post(this.rootPath).send(this.mock);
        expect(resposta.status).toBe(401);
      });
<<<<<<< HEAD

      test("Rota GET com um parametro", async () => {
        const resposta = await request(app).get(
          this.rootPath + this.paramPath + this.param
        );
        this.setDados(resposta.body.dados);
        expect(resposta.status).toBe(200);
        expect(this.expect).toBe(this.param);
      });

      test("Rota GET um usuario que não existe", async () => {
        const resposta = await request(app).get(
          this.rootPath + this.paramPath + "foo/bar"
        );
        expect(resposta.status).toBe(404);
      });

      test("Rota PUT", async () => {
        const respostaPut = await request(app)
          .put(this.rootPath + this.paramPath + this.param)
          .set("user", "admin")
          .send(this.putAtt);
        expect(respostaPut.status).toBe(200);
        const respostaGet = await request(app).get(
          this.rootPath + this.paramPath + this.paramAtt
        );
        this.setDados(respostaGet.body.dados);
        expect(this.expect).toBe(this.paramAtt);
      });

      test("Rota DELETE", async () => {
        const respostaDelete = await request(app)
          .delete(this.rootPath + this.paramPath + this.paramAtt)
          .set("user", "admin");
        expect(respostaDelete.status).toBe(200);
        expect(respostaDelete.body.erro).toBeFalsy();
        const respostaGet = await request(app).get(
          this.rootPath + this.paramPath + this.paramAtt
        );
        expect(respostaGet.status).toBe(404);
      });
    });
  }
}

export default Test;
=======

      test("Rota GET com um parametro", async () => {
        const resposta = await request(app).get(
          this.rootPath + this.paramPath + this.param
        );
        this.setDados(resposta.body.dados);
        expect(resposta.status).toBe(200);
        expect(this.expect).toBe(this.param);
      });

      test("Rota GET um usuario que não existe", async () => {
        const resposta = await request(app).get(
          this.rootPath + this.paramPath + "foo/bar"
        );
        expect(resposta.status).toBe(404);
      });
      test("Rota PUT", async () => {
        const respostaPut = await request(app)
          .put(this.rootPath + this.paramPath + this.param)
          .set("user", "admin")
          .send(this.putAtt);
        expect(respostaPut.status).toBe(200);
        const respostaGet = await request(app).get(
          this.rootPath + this.paramPath + this.paramAtt
        );
        this.setDados(respostaGet.body.dados);
        expect(this.expect).toBe(this.paramAtt);
      });
    });
  }
  static testDel() {
    describe(this.describe, () => {
      test("Rota DELETE", async () => {
        const respostaDelete = await request(app)
          .delete(this.rootPath + this.paramPath + this.paramAtt)
          .set("user", "admin");
        expect(respostaDelete.status).toBe(200);
        expect(respostaDelete.body.erro).toBeFalsy();
        const respostaGet = await request(app).get(
          this.rootPath + this.paramPath + this.paramAtt
        );
        expect(respostaGet.status).toBe(404);
      });
    });
  }
}
export default Test;
>>>>>>> e74c679923d927fb726c06a9a568036b8badde2a
