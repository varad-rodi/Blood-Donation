const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    level: {
        type: String,
         required: true
    },
    prize: {
        type: String,
         required: true
    },
    duration: {
        type: String,
         required: true
    }

});

module.exports = mongoose.model("Note", NoteSchema);