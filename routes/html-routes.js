var express = require("express");
const axios = require('axios');
const cheerio = require('cheerio');
var mongoose = require("mongoose");

// This talks to the ORM (Mongoose)
var db = require("../models");

var router = require("express").Router(); 

router.get("/", function(req, res) {

  db.Result.find({})
    .then(function(result) {
      let resultObj = {
        races: result
      };
      console.log("result is: " + resultObj);
      res.render("index", resultObj)
    })
    .catch(function(err) {
      res.json(err);
    })

});

router.get("/saved", function(req, res) {

  db.Result.find({})
    .then(function(result) {
      let resultObj = {
        races: result
      };
      console.log("result is: " + resultObj);
      res.render("saved", resultObj)
    })
    .catch(function(err) {
      res.json(err);
    })

});

module.exports = router; 




