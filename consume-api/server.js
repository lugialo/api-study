const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());
app.get("/", async (req, res) => {
  const { data } = await axios("https://jsonplaceholder.typicode.com/users");

  return res.json(data);

  // return res.json([
  //   { nome: "Breno", adjetivo: "Lindo" },
  //   { nome: "Gabriel", adjetivo: "Cabeçudo" },
  //   { nome: "Zé", adjetivo: "Rayan" },
  // ]);
});

app.listen("4567");
