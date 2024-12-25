const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const db = require("./config/db");
require("dotenv").config();

app.use(express.json());
app.use(cors());

db();

// Konfigurasi Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
