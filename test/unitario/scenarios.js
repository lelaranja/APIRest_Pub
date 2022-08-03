class Scenarios {
  static scenario = [
    //scenario 1
    {
      msg: ["dados vazios", "dados validos"],
      dados: [
        [],
        [
          {
            nome: "Estou preenchido",
            estado: "Rio de Janeiro",
            cidade: "Rio de Janeiro",
          },
        ],
      ],
      toBe: [true, false],
    },
    //scenario 2
    {
      msg: "teste com dados vazios",
      dados: {
        "funcionario": "Rodolpho",
        "produtos": undefined,
        "valorCompra": 1400
      }
    }, {
      msg: [
        "Teste com dados vazios",
        "Teste com dados vazios",
        "Teste com dados vazios",
        "Teste com dados completos",
      ],
      dados: [
        {
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
    //scenario 3
    {
      msg: [
        "Teste de string com string",
        "Teste de string com string",
        "Teste de string com Number",
      ],
      dados: ["Sou uma string", "Tambem sou", 400],
      toBe: [true, true, false],
    },
    //scenario 4
    {
      msg: [
        "teste com dados number",
        "teste sendo string",
        "teste sendo undefined"
      ],
      dados: ["5", 5, undefined],
      toBe: [false, true, false]
    },
    //scenario 7
    {
      msg: [
        "teste com numeros diferentes de 11",
        "teste com 11 caracteres",
        "teste sendo undefined"
      ],
      dados: ["3", "11111111111", undefined],
      toBe: [false, true, false]
    }
  ];
}
export default Scenarios;