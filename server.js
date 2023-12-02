<<<<<<< HEAD
const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");

//dotenv config
dotenv.config();

// rest objest
const app = express();

//middlewares

app.use(express.json());
app.use(moragan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "server running",
  });
});

//port
const port = process.env.PORT || 8080;

//listen port

//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
=======
const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");

//dotenv config
dotenv.config();

// rest objest
const app = express();

//middlewares

app.use(express.json());
app.use(moragan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "server running",
  });
});

//port
const port = process.env.PORT || 8080;

//listen port

//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
>>>>>>> 943bf420bc349d80aebe48e33d8f8d933c30d3b1
