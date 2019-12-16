const mongoose = require("mongoose");

let Schema = mongoose.Schema; 

let NoteSchema = new Schema({
    note: {
        type: String,
        trim: true
    }
});

let Note = mongoose.model("Note", NoteSchema);

module.exports = Note; 

