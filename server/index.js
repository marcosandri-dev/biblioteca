var express = require("express"),
  app = express();

//Routes
var booksRoutes = require("./routes/books");

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.use("/api/books", booksRoutes);

app.listen(8000, () => {
  console.log("listening to port 8000");
});
