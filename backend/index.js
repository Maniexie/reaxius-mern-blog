const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const db = require("./config/db");
const routes = require("./routes");
require("dotenv").config();

app.use(express.json());

db();

// Konfigurasi Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// init route main
routes.use(cors());
app.use("/api/v1/", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
