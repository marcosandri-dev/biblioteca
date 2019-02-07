var express = require("express");
var router = express.Router();

const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "",
    database: ""
  }
});

router.get("/", (req, res) => {
  db.select("*")
    .from("books")
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
