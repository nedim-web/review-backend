const MCQ = require('../models/MCQModel');

const getAllMcq = async (req, res) => {
    const mcqs = await MCQ.find({});
    
    if(!mcqs){
        res.status(400).json({msg: 'Unable to get'});
    }

    res.status(200).json(mcqs);
}

const createMCQ = async (req, res) => {
    const {question, a, b, c, d, correctAnswer, explanation} = req.body;

    try{
        const mcq = await MCQ.create({question, a, b, c, d, correctAnswer, explanation});
        res.status(200).json(mcq);
    }catch (error){
        res.status(400).json({error: error.message});
    }

}

module.exports = {getAllMcq, createMCQ};