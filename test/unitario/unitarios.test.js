import Validacoes from "../../src/services/validacoes.js";
import Scenarios from "./scenarios.js";
class UnitTests extends Scenarios {
  static test() {
    describe("Verifica se o dado está vazio ou não", () => {
      let i = 0;
      do {
        test(this.scenario[0].msg[i], () => {
          expect(() =>
            Validacoes.isEmpty(this.scenario[0].dados[i])
          ).toBeTruthy();
        });
        i++;
      } while (i < 3);
    });
  }
}

UnitTests.test();
