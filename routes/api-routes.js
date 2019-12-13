var express = require("express");
const axios = require('axios');
const cheerio = require('cheerio');
var mongoose = require("mongoose");

// This talks to the ORM (Mongoose)
var db = require("../models/Result.js");

module.exports = function(app) {

    app.get("/scrape", function(req, res) {

        axios.get("https://www.runningintheusa.com/").then(function(response) {

            let $ = cheerio.load(response.data);

            let races = []; 

            $(".panel-body tr").each(function(i, element) {

                console.log("--------");

                let date;
                let raceName;
                let raceDesc;
                let moreInfoLink;
                let location;
                let googleMapsLink;

            for (var i = 1; i < 4; i++) {
      
                if (i < 2) {

                    date = $(element).children().eq(i).children().eq(0).text().replace(/\s\s+/g, ' ').trim(); 

                    console.log("ele 1 " + date);
                } else if (i < 3) {
                   
                    raceName = $(element).children().eq(i).find("b").text().replace(/\s\s+/g, ' ').trim(); 
                    console.log("ele 2 " + raceName);

                    raceDesc = $(element).children().eq(i).children().eq(1).text().replace(/\s\s+/g, ' ').trim(); 
                    console.log("ele 3 " + raceDesc);

                    moreInfoLink = $(element).children().eq(i).find("a").attr("href");

                    console.log("ele 4 " + moreInfoLink);

                } else {

                    location = $(element).children().eq(i).find("b").text().replace(/\s\s+/g, ' ').trim(); 
                    console.log("ele 5 " + location);

                    googleMapsLink = $(element).children().eq(i).find("a").attr("href");

                    console.log("ele 6 " + googleMapsLink);

                }

            }

            races.push({
                date: date,
                race: raceName,
                raceDescription: raceDesc, 
                redirectLink: moreInfoLink,
                location: location, 
                googleMapsLink: googleMapsLink
            })

            });
 
            console.log(races);

            res.send("Scrape done.")
    
          });
    
          });

}



