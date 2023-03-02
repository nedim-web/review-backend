const TF = require('../models/TFModel');

const getAllTf = async (req, res) => {
    const tfs = await TF.find({});
    
    if(!tfs){
        res.status(400).json({msg: 'Unable to get'});
    }

    res.status(200).json(tfs);
}

const createTF = async (req, res) => {
    const {question, correctAnswer, explanation, chapter} = req.body;

    try{
        const tf = await TF.create({question, correctAnswer, explanation, chapter});
        res.status(200).json(tf);
    }catch (error){
        res.status(400).json({error: error.message});
    }

}

module.exports = {getAllTf, createTF};