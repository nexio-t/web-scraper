var express = require("express");
const axios = require('axios');
const cheerio = require('cheerio');
var mongoose = require("mongoose");
var router = require("express").Router(); 
// This talks to the ORM (Mongoose)
var db = require("../models");

// Run scrape 
router.get("/scrape", function(req, res) {

    axios.get("https://www.runningintheusa.com/").then(function(response) {

        let $ = cheerio.load(response.data);

        // let races = []; 

        $(".panel-body tr").each(function(i, element) {

            if (i !== 0) {

                console.log(i);

                console.log("--------");

                let race = {};

                let date;
                let raceName;
                let raceDesc;
                let moreInfoLink;
                let location;
                let googleMapsLink;

            for (var i = 1; i < 4; i++) {
        
                if (i < 2) {
                    // I think adding another "children" below will just grab the date

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

            race.date = date;
            race.race = raceName;
            race.raceDescription = raceDesc;
            race.redirectLink = moreInfoLink;
            race.location = location; 
            race.googleMapsLink = googleMapsLink; 

            console.log(race);


            // db.Result.create(race)
            //     .then(function(data) {
            //         console.log("database data is:" + data);
            //     })
            //     .catch(function(err) {
            //         console.log(err);
            //     })

            var newResult = new db.Result(race);
            newResult.save(function (err) {
                if (err) return handleError(err);
            })

            }


        });

        res.send("Scrape done.")

        });

        });

// Remove collection 
router.delete("/scrape", function(req, res) {

    db.Result.deleteMany({})
    .then(function(result) {
        console.log(result);
        res.send("delete worked!!!")
    });

// Update race to saved 
    

})

// Update race to saved 
router.put("/scrape/:id", function(req, res) {

    // console.log(req.body);
    // console.log(req.params.id); 

    db.Result.findOneAndUpdate({ _id: req.params.id}, {$set: {saved: req.body.saved} })
    .then(function(result) {
        console.log(result);
        res.send("updated race to saved!")
    });


});

router.post("/note/:id", function(req, res) {

    // console.log("line 133 " + req.body);
    // console.log("line 134 " + req.params.id); 

    let parentRace = req.params.id; 
    let newNote = req.body;

    db.Note.create(newNote)
        .then(function (data) {
            return db.Result.findOneAndUpdate({_id: parentRace}, {$push: {notes: data._id},}, {new: true});
        })
        .then(function(data) {
            res.json(data); 
        })
        .catch(function (error) {
            console.log(error);
        });

});

// delete a note 

router.delete("/note/:id", function(req, res) {

    console.log("line 156 " + req.body);
    console.log("line 157 " + req.params.id); 

    db.Note.deleteOne({ _id: req.params.id})
        .then(function() {
            return db.Result.updateOne({ _id: req.body.raceId }, {$pull : {notes: req.params.id}})
        })
        .then(function (data) {
            res.json(data);
        })


});

router.get("/scrape/:id", function(req, res) {

    console.log(req.body);
    console.log(req.params.id);

    db.Result.findOne({ _id: req.params.id})
        .populate("notes")
        .then(function(data) {
            res.json(data);
            // return db.Note.find({ _id : { $in : data.notes}})
        })
        .catch(function(err) {
            res.json(err);
        });
});


module.exports = router; 



