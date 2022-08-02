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
        [
          {
            nome: "",
            estado: "Rio de Janeiro",
            cidade: "Rio de Janeiro",
          },
        ],
        [
          {
            nome: "Zaniel",
            estado: undefined,
            cidade: "Rio de Janeiro",
          },
        ],
        [
          {
            nome: "Xizoma",
            estado: "Xangai",
            cidade: "Japao",
          },
        ],
      ],
    },
    //scenario 2
    {
      msg: "teste com dados vazios",
      dados: {
          "funcionario" : "Rodolpho",
          "produtos" : undefined,
          "valorCompra": 1400
      }
    }
  ];
}

export default Scenarios;
