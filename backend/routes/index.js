//init express
const express = require("express");

// init routes
const chat_router = require("./chat_routes");
const user_router = require("./user_routes");

// init routes express
const routes = express.Router();

// routes all
routes.use(chat_router);
routes.use(user_router);

//routes exports
module.exports = routes;
