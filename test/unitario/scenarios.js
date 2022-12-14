class Scenarios {
  static scenario = [
    //scenario 0
    {
      msg: ["dados vazios",
        "dados validos"
      ],
      dados: [
        [],
        [{
          nome: "Estou preenchido",
          estado: "Rio de Janeiro",
          cidade: "Rio de Janeiro",
        }, ],
      ],
      toBe: [true, false],
    },
    //scenario 1    
    {
      msg: [
        "Teste com dados vazios",
        "Teste com dados vazios",
        "Teste com dados vazios",
        "Teste com dados completos",
      ],
      dados: [{
          funcionario: "Rodolpho",
          produtos: "",
          valorCompra: 1400,
        },
        {
          funcionario: "",
          produtos: "",
          valorCompra: "",
        },
        {
          funcionario: "Teste",
          produtos: "Testando",
          valorCompra: "",
        },
        {
          funcionario: "Teste",
          produtos: "Testando",
          valorCompra: 400,
        },
      ],
      toBe: [true, true, true, false],
    },
    //scenario 2
    {
      msg: [
        "Teste de string com string",
        "Teste de string com string",
        "Teste de string com Number",
      ],
      dados: ["Sou uma string", "Tambem sou", 400],
      toBe: [true, true, false],
    },
    //scenario 3
    {
      msg: [
        "teste com dados number",
        "teste sendo string",
        "teste sendo undefined",
      ],
      dados: ["5", 5, undefined],
      toBe: [false, true, false],
    },
    //scenario 4
    {
      msg: [
        "teste com menos de 14 caracteres",
        "teste com mais de 14 caracteres",
        "teste com 14 caracteres"
      ],
      dados: ["1234567891234", "123456789123456", "12345678912345"],
      toBe: [false, false, true],
    },
    //scenario 5
    {
      msg: [
        "teste com menos de 10 caracteres",
        "teste com mais de 11 caracteres",
        "teste com 10 caracteres",
        "teste com 11 caracteres"
      ],
      dados: [
        "123456789",
        "123456789123",
        "1234567891",
        "12345678912"
      ],
      toBe: [false, false, true, true],
    },
    //scenario 6
    {
      msg: [
        "teste com numeros diferentes de 11",
        "teste com 11 caracteres"
      ],
      dados: ["3", "11111111111"],
      toBe: [false, true],
    }
  ];
}
export default Scenarios;