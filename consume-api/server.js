const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json([
    { name: "Breno" },
    { name: "Dove" }]);
});

app.listen("4567");
