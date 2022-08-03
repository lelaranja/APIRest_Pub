import Validacoes from "../../src/services/validacoes.js";
import Scenarios from "./scenarios.js";

class UnitTests extends Scenarios {
  static test() {
    describe("Verifica se a resposta está vazia ou não", () => {
      for (let i = 0; i < 2; i++) {
        test(this.scenario[0].msg[i], () => {
          expect(Validacoes.isEmpty(this.scenario[0].dados[i]))
            .toBe(this.scenario[0].toBe[i]);
        });
      }
    });

    describe("Verifica se algum dado da requisição está vazio", () => {
      for (let i = 0; i < 4; i++) {
        test(this.scenario[1].msg[i], () => {
          expect(!Validacoes.someDataIsEmpty(this.scenario[1].dados[i]))
            .toBe(this.scenario[1].toBe[i]);
        });
      }
    });

    describe("verifica se é string ou não", () => {
      for (let i = 0; i < 3; i++) {
        test(this.scenario[2].msg[i], () => {
          expect(Validacoes.isString(this.scenario[2].dados[i])).toBe(
            this.scenario[2].toBe[i]
          );
        });
      }
    });
    describe("Verifica se o dado é um number", () => {
      for (let i = 0; i < 3; i++) {
        test(this.scenario[3].msg[i], () => {
          expect(Validacoes.isNumber(this.scenario[3].dados[i])).toBe(this.scenario[3].toBe[i])
        })
      }
    });
    describe("Verifica o tamanho do dado", () => {
      for (let i = 0; i < 3; i++) {
        test(this.scenario[6].msg[i], () => {
          expect(Validacoes.isNumber(this.scenario[6].dados[i])).toBe(this.scenario[6].toBe[i])
        })
      }
    })

  }
}

UnitTests.test();