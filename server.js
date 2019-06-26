var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var index = require("./app/routes/index");
var produto = require("./app/routes/produto");

app.use("/", index);
app.use("/produto", produto);

app.listen(3000, function() {
  console.log("Servidor rodando! Acesse: http://localhost:3000");
});
