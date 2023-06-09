const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  return res.json([
    { nome: "Breno", adjetivo: "Lindo" },
    { nome: "Gabriel", adjetivo: "Cabeçudo" },
    { nome: "Zé", adjetivo: "Rayan" },
  ]);
});

app.listen("4567");
