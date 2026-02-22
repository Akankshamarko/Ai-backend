const express = require("express");
const airoutes = require("./airoutes");

const{summarizeText}= require(".../controller/aiconteroller");

Router.post("/summerize",summarizeText);
module.exports = Router;