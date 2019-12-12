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
          
            // var results = [];
          
            $(".panel-body tr").each(function(i, element) {

        
            // let data = $(element).children().children().eq(2).text().replace(/\s\s+/g, ' ')

            // let data = $(element).children().children()

            for (var i = 1; i < 4; i++) {

                if (i < 2) {

                    let reName = $(element).children().eq(i).children().eq(0).text().replace(/\s\s+/g, ' ').trim(); 
                    console.log("ele 1 " + reName);


                } else {

                    let date = $(element).children().eq(i).find("a").text().replace(/\s\s+/g, ' ').trim(); 

                    let googleLink = $(element).children().eq(i).find("a").attr("href");

                    console.log("ele 2 " + date);

                    console.log("ele 2 " + googleLink);
                }

            }

    

            // USE THE BELOW 

            // let date = $(element).children().eq(i).find("a").text().replace(/\s\s+/g, ' ').trim(); 

            // USE THE ABOVE 


            // let raceTitle = console.log($(element).children().text().replace(/\s\s+/g, ' ').trim()); 

            let raceDate = $(element).children(0).text().trim().replace(/\s\s+/g, ' ');

            // console.log(raceDate);

            // let blank = $(element).children(2).text().replace(/\s\s+/g, ' ').trim(); 
            
            // console.log(blank);

            // for (let i = 0; i < data.length; i++) {

            //     // console.log($(element).children().children().eq(i).text().replace(/\s\s+/g, ' ').trim()); 

            // }


            // console.log($(element).children().children().eq(2).text().replace(/\s\s+/g, ' ')); 

            // console.log($(element).children().eq(1).text().replace(/\s\s+/g, ' ')); 
          
            //   var title = $(element).children().text();
            //   var link = $(element).find("a").attr("href");
          
            //   results.push({)
            //     title: title,
            //     link: link
            //   });


            });
          
            // console.log(results);
          });
    
          });

}



