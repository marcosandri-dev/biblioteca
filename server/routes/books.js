var express = require("express");
var router = express.Router();
require("dotenv").config();

const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB
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
