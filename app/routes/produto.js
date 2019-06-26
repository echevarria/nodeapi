const express = require("express");
const router = express.Router();

const { Product } = require("../models");

const app = express();

app.get("/", function(request, response) {
  response.status(200).send({ rows: "dsads" });

  // conexao.query("SELECT * FROM produtos", function(error, rows) {
  //   if (error) {
  //     response.status(500).send(error);
  //   }
  //   response.status(200).send(rows);
  // });
});

app.get("/:id", function(request, response) {
  // conexao.query(
  //   "SELECT * FROM produtos where id = " + parseInt(request.params.id),
  //   function(error, rows) {
  //     if (error) {
  //       response.status(500).send(error);
  //     }
  //     if (rows.length > 0) {
  //       response.status(200).send(rows);
  //     } else {
  //       response.status(404).send("Not Found");
  //     }
  //   }
  // );
});

app.post("/", async function(request, response) {
  await Product.create(request.body)
    .then(function(item) {
      response.status(201).send("");
    })
    .catch(function(error) {
      response.status(500).send(error);
    });
});

app.put("/:id", function(request, response) {
  // conexao.query(
  //   "UPDATE produtos set descricao = '" +
  //     request.body.descricao +
  //     "' where id = " +
  //     parseInt(request.params.id),
  //   function(error, rows) {
  //     if (error) {
  //       response.status(500).send(error);
  //     }
  //     response.status(204).send("");
  //   }
  // );
});

app.delete("/:id", function(request, response) {
  // conexao.query(
  //   "DELETE FROM produtos where id = " + parseInt(request.params.id),
  //   function(error, rows) {
  //     if (error) {
  //       response.status(500).send(error);
  //     }
  //     response.status(204).send("");
  //   }
  // );
});

module.exports = app;
