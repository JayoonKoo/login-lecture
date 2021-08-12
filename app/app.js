"use strict";

const express = require("express");
const app = express();
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");
// 미들웨어 등록 js 파일 연결 위해서 
app.use(express.static(`${__dirname}/src/public`))
app.use(express.json());

app.use("/", home);

module.exports = app;
