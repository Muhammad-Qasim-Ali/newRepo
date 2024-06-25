const mongoose = require("mongoose");

const SaveSchema = new mongoose.Schema({

    text: {
        type: String,
        required: true
    },

},{'timestamps': true});

module.exports = mongoose.model("Save", SaveSchema);