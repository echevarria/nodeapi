const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const app = express();

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "api"
});

const produtos = [
  {
    id: 1,
    descricao: "Tênis"
  },
  {
    id: 2,
    descricao: "Camiseta"
  },
  {
    id: 3,
    descricao: "Boné"
  }
];

conexao.connect();

app.get("/", function(request, response) {
  conexao.query("SELECT * FROM produtos", function(error, rows) {
    if (error) {
      response.status(500).send(error);
    }
    response.status(200).send(rows);
  });
});

app.get("/:id", function(request, response) {
  conexao.query(
    "SELECT * FROM produtos where id = " + parseInt(request.params.id),
    function(error, rows) {
      if (error) {
        response.status(500).send(error);
      }
      if (rows.length > 0) {
        response.status(200).send(rows);
      } else {
        response.status(404).send("Not Found");
      }
    }
  );
});

app.post("/", function(request, response) {
  conexao.query(
    "INSERT INTO produtos (descricao) values ('" +
      request.body.descricao +
      "')",
    function(error, rows) {
      if (error) {
        response.status(500).send(error);
      }
      response.status(201).send("");
    }
  );
});

app.put("/:id", function(request, response) {
  conexao.query(
    "UPDATE produtos set descricao = '" +
      request.body.descricao +
      "' where id = " +
      parseInt(request.params.id),
    function(error, rows) {
      if (error) {
        response.status(500).send(error);
      }
      response.status(204).send("");
    }
  );
});

app.delete("/:id", function(request, response) {
  conexao.query(
    "DELETE FROM produtos where id = " + parseInt(request.params.id),
    function(error, rows) {
      if (error) {
        response.status(500).send(error);
      }
      response.status(204).send("");
    }
  );
});

module.exports = app;
