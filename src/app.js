const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

//****************** Templates Engine ******************/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const mainRouter = require("./routers/main");
app.use("/", mainRouter);

const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Servidor Funcionando en el puerto ${PORT}`);
});
