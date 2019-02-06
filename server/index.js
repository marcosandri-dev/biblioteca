var express = require("express"),
  app = express();

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

db.select("*")
  .from("books")
  .then(data => {
    console.log(data);
  });

//Routes
var booksRoutes = require("./routes/books");

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.use("/api/books", booksRoutes);

app.listen(8000, () => {
  console.log("listening to port 8000");
});
