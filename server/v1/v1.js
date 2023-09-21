const express = require("express");

const v1Router = require("../routes/blog.router");

const v1 = express();

v1.use("/v1", v1Router);

module.exports = v1;
