const express = require('express');
const router = express.Router();
const {getAllMcq, createMCQ} = require('../controllers/MCQController');

router.get('/', getAllMcq)
    .post('/', createMCQ)

module.exports = router;