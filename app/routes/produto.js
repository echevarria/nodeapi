const express = require("express");
const router = express.Router();

const { Product } = require("../models");

const app = express();

app.get("/", function(request, response) {
  Product.findAll()
    .then(function(result) {
      response.status(200).send(result);
    })
    .catch(function(error) {
      response.status(500).send(error);
    });
});

app.get("/:id", function(request, response) {
  Product.findByPk(parseInt(request.params.id))
    .then(function(result) {
      if (result != null) {
        response.status(200).send(result);
      } else {
        response.status(404).send("Not Found");
      }
    })
    .catch(function(error) {
      response.status(500).send(error);
    });
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
  Product.update(
    {
      description: request.body.description
    },
    {
      where: {
        id: parseInt(request.params.id)
      }
    }
  )
    .then(function(result) {
      response.status(204).send("");
    })
    .catch(function(error) {
      response.status(500).send(error);
    });
});

app.delete("/:id", function(request, response) {
  Product.destroy({
    where: {
      id: parseInt(request.params.id)
    }
  })
    .then(function(result) {
      response.status(204).send("");
    })
    .catch(function(error) {
      response.status(500).send(error);
    });
});

module.exports = app;
