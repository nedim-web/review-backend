const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mcqSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    a: {
        type: String,
        required: true
    },
    b: {
        type: String,
        required: true
    },
    c: {
        type: String,
        required: true
    },
    d: {
        type: String,
        required: true
    },
    correctAnswer:{
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('MCQ', mcqSchema);