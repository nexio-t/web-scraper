var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ResultsSchema = new Schema({
  airline: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: String,
    trim: true,
    required: true
  },
  stop: {
    type: String,
    trim: true,
    required: true
  },
  depart: {
    type: String,
    trim: true,
    required: true
  },
  return: {
    type: String,
    required: true
  }
});

var Result = mongoose.model("Result", ResultsSchema);

module.exports = Result;
