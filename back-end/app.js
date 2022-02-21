// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const porscheController = require("./Controllers/porscheController");
const genController = require("./Controllers/genController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/porsches", porscheController);

app.use("/generations", genController)

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});



// EXPORT
module.exports = app;
