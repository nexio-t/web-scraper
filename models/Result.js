var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ResultsSchema = new Schema({
  date: {
    type: String,
    trim: true,
    required: true
  },
  race: {
    type: String,
    trim: true,
    required: true
  },
  raceDescription: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  location: {
    type: String,
    trim: true,
    required: true
  },
  locationLink: {
    type: String,
    required: true
  }
});

var Result = mongoose.model("Result", ResultsSchema);

module.exports = Result;
