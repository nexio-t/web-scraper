var express = require("express");
const axios = require('axios');
const cheerio = require('cheerio');
var mongoose = require("mongoose");

// This talks to the ORM (Mongoose)
var db = require("../models/Result.js");

module.exports = function(app) {

    app.get("/", function(req, res) {

        axios.get("https://www.runningintheusa.com/").then(function(response) {

            var $ = cheerio.load(response.data);

            var races = []; 

            $(".panel-body tr").each(function(i, element) {

                console.log("--------");

            for (var i = 1; i < 4; i++) {
      
                if (i < 2) {

                    let date = $(element).children().eq(i).children().eq(0).text().replace(/\s\s+/g, ' ').trim(); 

                    console.log("ele 1 " + date);
                } else if (i < 3) {
                   
                    let raceName = $(element).children().eq(i).find("b").text().replace(/\s\s+/g, ' ').trim(); 
                    console.log("ele 2 " + raceName);

                    let raceDesc = $(element).children().eq(i).children().eq(1).text().replace(/\s\s+/g, ' ').trim(); 
                    console.log("ele 3 " + raceDesc);

                    let moreInfoLink = $(element).children().eq(i).find("a").attr("href");

                    console.log("ele 4 " + moreInfoLink);

                } else {

                    let location = $(element).children().eq(i).find("b").text().replace(/\s\s+/g, ' ').trim(); 
                    console.log("ele 5 " + location);

                    let googleMapsLink = $(element).children().eq(i).find("a").attr("href");

                    console.log("ele 6 " + googleMapsLink);

                }

            }

            });
          
            // console.log(results);
          });
    
          });

}



