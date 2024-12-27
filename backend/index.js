const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db");
const routes = require("./routes");
require("dotenv").config();

const app = express();
routes.use(cors());

db();
app.use(cors());
app.use(express.json());

// Konfigurasi Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Konfigurasi Body Parser
app.use(bodyParser.json());

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
