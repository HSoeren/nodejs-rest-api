const mongoose = require("mongoose");
const  Schema  = mongoose.Schema;

const questionSchema = new Schema({
    question: {
        type: String,
    },
    category: {
        type: String,
    },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;