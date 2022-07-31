const autenticacaoSupplier = (app) => {
  app.use((req, res, next) => {
    if (req.method !== "GET") {
      if (req.headers.usertype === "gerente") {
        next();
      } else {
        res.json({ erro: "Usuario nao permitido" });
      }
    } else {
      next();
    }
  });
};

export default autenticacaoSupplier;
