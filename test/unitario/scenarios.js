class Scenarios {
  static scenario = [
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
  ];
}

export default Scenarios;
