var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (request, response) {
  response.status(200).send({
    title: "Node Express API Top",
    version: "1.0.0"
  });
});

app.listen(3000, function() {
  console.log("Servidor rodando! Acesse: http://localhost:3000");
});
