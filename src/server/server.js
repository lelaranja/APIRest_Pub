import app from "../app.js";

const port = 3000;

app.listen(port, () => {
  console.log(`Server online, address: http://localhost:${port}`);
});