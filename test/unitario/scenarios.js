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
  ];
}

export default Scenarios;
