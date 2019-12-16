const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ResultsSchema = new Schema({
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
  redirectLink: {
    type: String,
    trim: true,
    required: true
  },
  location: {
    type: String,
    trim: true,
    required: true
  },
  googleMapsLink: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    required: true, 
    default: false
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

let Result = mongoose.model("Result", ResultsSchema);

module.exports = Result;
