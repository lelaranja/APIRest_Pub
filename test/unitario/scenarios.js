class Scenarios {
  static scenario = [
    //scenario 1
    {
      msg: [
        "dados vazios",
        "dados invalidos com string vazia",
        "dados invalidos com undefined",
        "dados validos",
      ],
      dados: [
        [],
        [{
          nome: "",
          estado: "Rio de Janeiro",
          cidade: "Rio de Janeiro",
        }, ],
        [{
          nome: "Zaniel",
          estado: undefined,
          cidade: "Rio de Janeiro",
        }, ],
        [{
          nome: "Xizoma",
          estado: "Xangai",
          cidade: "Japao",
        }, ],
      ],
    },
    //scenario 2
    {
      msg: "teste com dados vazios",
      dados: {
        "funcionario": "Rodolpho",
        "produtos": undefined,
        "valorCompra": 1400
      }
    },
    //scenario 4
    {
      msg: [
        "teste com dados number",
        "teste sendo string",
        "teste sendo undefined"
      ],
      dados: ["5",5,undefined],
      toBe: [false, true, false]
    }
  ];
}
export default Scenarios;