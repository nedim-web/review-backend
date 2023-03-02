const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tfSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
    },
    chapter: {
        type: String,
        required: true
    }

}, {database : 'review'});

module.exports = mongoose.model('tfs', tfSchema);