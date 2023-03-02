const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const essSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    chapter: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('ESS', essSchema);