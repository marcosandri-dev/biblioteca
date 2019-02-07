var express = require("express"),
  app = express();

var cors = require("cors");
app.use(cors());

//Routes
var booksRoutes = require("./routes/books");

app.use("/api/books", booksRoutes);

//serve the build react project
app.use(express.static(__dirname + "/build"));
app.get("/", function(req, res) {
  //res.send("Hello World!");
  res.sendFile("index.html");
});

app.listen(8000, () => {
  console.log("listening to port 8000");
});
