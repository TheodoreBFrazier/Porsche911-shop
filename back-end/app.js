// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");

app.get("/porsches", async (req, res) => {
  try {
    const allPorsches = await db.any("SELECT * FROM porsches");
    res.json(allPorsches);
  } catch (err) {
    res.json(err);
  }
});

// EXPORT
module.exports = app;
