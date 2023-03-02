const ESS = require('../models/ESSModel');

const getAllEss = async (req, res) => {
    const ESSs= await MCQ.find({});
    
    if(!ESSs){
        res.status(400).json({msg: 'Unable to get'});
    }

    res.status(200).json(ESSs);
}

const createESS = async (req, res) => {
    const {question, answer, chapter} = req.body;

    try{
        const ess = await ESS.create({question, answer, chapter});
        res.status(200).json(ess);
    }catch (error){
        res.status(400).json({error: error.message});
    }

}

module.exports = {getAllEss, createESS};